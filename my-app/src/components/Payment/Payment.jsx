import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment__main">
        <div className="main__delivery">
          <h1>Доставка</h1>
          <p>
            Проснувшись однажды утром после беспокойного сна, <br /> Грегор
            Замза обнаружил, что он у себя в постели <br /> превратился в
            страшное насекомое.
          </p>
          <p>
            Лежа на панцирнотвердой спине, он видел, стоило ему <br />{" "}
            приподнять голову, свой коричневый, выпуклый, <br /> разделенный
            дугообразными чешуйками живот, на <br /> верхушке которого еле
            держалось готовое вот-вот <br />
            окончательно сползти одеяло. <br />
          </p>
          <span>Детальное описание</span>
        </div>
        <div className="main__payment">
          <h1>Оплата</h1>
          <p>
            Проснувшись однажды утром после беспокойного сна, <br /> Грегор
            Замза обнаружил, что он у себя в постели <br /> превратился в
            страшное насекомое.
          </p>
          <p>
            Лежа на панцирнотвердой спине, он видел, стоило ему <br /> приподнять
            голову, свой коричневый, выпуклый, <br /> разделенный дугообразными
            чешуйками живот, на <br /> верхушке которого еле держалось готовое вот-вот <br />
            окончательно сползти одеяло.
          </p>
          <span>Детальное описание</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
