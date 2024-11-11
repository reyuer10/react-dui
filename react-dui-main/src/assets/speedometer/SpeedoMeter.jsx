
export default function SpeedoMeter({
    value,
    duration = 1000,
    size = "3rem",
    color = "black",
}) {
    return (
        <div
            className="speedo-wrap"
            style={{ height: size, fontSize: size, lineHeight: size }}
        >
            {(value + "").split("").map((val, idx) => (
                <div
                    className="speedo-digits font-bold to-amber-200 gradient-text"
                    style={{
                        color: color,
                        marginTop: `calc( -${val}em `,
                        transition: `${duration}ms all`,
                        transitionDelay: `${((value + "").split("").length - idx) * 20}ms`
                    }}
                >
                    <div className="speedo-digit" data-val="0">
                        0
                    </div>
                    <div className="speedo-digit" data-val="1">
                        1
                    </div>
                    <div className="speedo-digit" data-val="2">
                        2
                    </div>
                    <div className="speedo-digit" data-val="3">
                        3
                    </div>
                    <div className="speedo-digit" data-val="4">
                        4
                    </div>
                    <div className="speedo-digit" data-val="5">
                        5
                    </div>
                    <div className="speedo-digit" data-val="6">
                        6
                    </div>
                    <div className="speedo-digit" data-val="7">
                        7
                    </div>
                    <div className="speedo-digit" data-val="8">
                        8
                    </div>
                    <div className="speedo-digit" data-val="9">
                        9
                    </div>
                </div>
            ))}
        </div>
    );
}




