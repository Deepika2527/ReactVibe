function Internal() {
    return (
        <>
            <style>
                {`
                .head {
                    color: red;
                    text-align: center;
                }

                #secPara {
                    border: 8px dotted green;
                    background-color: lightsalmon;
                }

                #secPara p {
                    color: white;
                }

                #secPara > p {
                    font-size: 30px;
                }
                `}
            </style>

            <h1 className="head">Internal jsx</h1>

            <section id="secPara">
                <p>This is in p1</p>
                <p>This is p2</p>

                <div>
                    <p>This is in p3</p>
                    <p>This is in p4</p>
                </div>
            </section>
        </>
    );
}

export default Internal;