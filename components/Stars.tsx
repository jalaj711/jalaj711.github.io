export default function Star(props: {count: number}){
    const starStyle = {
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        display: "block",
        background: "ghostwhite",
	zIndex: -10,
        boxShadow: "ghostwhite 0px 0px 20px 5px, ghostwhite 0 0 10px 1px"
      }
    var arr: Array<Array<number>> = []
    for(var i=0;i<props.count;i++){
        arr.push([Math.round(Math.random() * 90 + 5), Math.round(Math.random() * 90 + 5)])
    }
    return (
        <>
        {
        arr.map((elem, index) => <span
            style={{
              ...starStyle,
              position: "absolute",
              top: elem[0] + "%",
              left: elem[1] + "%",
            }}
            key={index}
          />)
        }
        </>
        )
}
