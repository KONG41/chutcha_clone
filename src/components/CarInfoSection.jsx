import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import img1 from "../assets/images/buycar/car_info_distance.png";
import img2 from "../assets/images/buycar/car_info_discount.png";
import img3 from "../assets/images/buycar/car_info_partsview.png";
import img4 from "../assets/images/buycar/car_info_history.png";
import img5 from "../assets/images/buycar/car_info_price.png";

const CarInfoSection = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(null);
  const [image, setImage] = useState();
  const [desc1, setDesc1] = useState();
  const [desc2, setDesc2] = useState();
  const [dataTabs, setDataTabs] = useState([
    {
      id: 1,
      tabTitle: "신차비교 정보",
      tabClicked: false,
      img: img1,
      desc1: "이 차의 실제 주행거리 및 연식을",
      desc2: "5단계의 보조지표와 함께 알려드립니다"
    },
    {
      id: 2,
      tabTitle: "주행거리 정보",
      tabClicked: false,
      img: img2,
      desc1: "출시가격 대비 판매가격을 통해",
      desc2: "해당 차량의 감가금액을 알 수 있습니다"
    },
    {
      id: 3,
      tabTitle: "3D수리 정보",
      tabClicked: false,
      img: img3,
      desc1: "사고, 교환, 수리 등의 이력을",
      desc2: "3D 파츠뷰의 형태로 보여드립니다"
    },
    {
      id: 4,
      tabTitle: "보험이력 정보",
      tabClicked: false,
      img: img4,
      desc1: "보험사고 기록 및 금액을 조회해드리며",
      desc2: "사고관련 상세 데이터도 확인 가능합니다"
    },
    {
      id: 5,
      tabTitle: "적정시세 정보",
      tabClicked: false,
      img: img5,
      desc1: "동일한 차량군의 시세 분석을 통해",
      desc2: "해당 차량의 적정시세를 보여드립니다"
    }
  ]);

  const CustomBtn = ({
    id,
    tabTitle,
    isActive,
    onClick,
    img,
    desc1,
    desc2
  }) => {
    return (
      <button
        type="button"
        onClick={() => navigate(id, img, desc1, desc2)}
        className={`car_info_btn ${isActive ? "on" : ""}`}
      >
        {t(tabTitle)}
      </button>
    );
  };

  const navigate = (id, img, desc1, desc2) => {
    setActive(id);
    setImage(img);
    setDesc1(desc1);
    setDesc2(desc2);
  };

  useEffect(() => {
    navigate(1);
    setImage(img1);
    setDesc1(dataTabs[0].desc1);
    setDesc2(dataTabs[0].desc2);
  }, []);

  return (
    <section className="container fake-section">
      <div className="container-2 row">
        <div className="desc_wrap ">
          <h1 className="biggest-title title-color">
            {t("숨겨진")} <span className="blue-text">{t("차량 정보")}</span>
            {t("를")}
            <br />
            {t("공개합니다")}
          </h1>
          <p className="big-text title-color">
            {t("딜러가 잘 알려주지 않는 50여 가지")}
            <br />
            {t("숨은 차량 정보를 보여드려요")}.
          </p>
          <ul>
            {dataTabs.map(item =>
              <li key={item.id}>
                <CustomBtn
                  {...item}
                  isActive={active === item.id}
                  img={item.img}
                  onClick={navigate}
                />
              </li>
            )}
          </ul>
        </div>
        <div className="img_wrap ">
          <img src={image} alt="img" />
          <div className="text-center">
            <p className="big-text title-color img-desc">
              {t(desc1)}
              <br />
              {t(desc2)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarInfoSection;
