import React, { useState } from "react";

const DestinationDataContect = React.createContext();

function DestinationDataProvider(props) {
  //previw in landing page
  const [titileImg, setTitileImg] = [];
  const [id, setId] = "";
  const [topic, SetTopic] = "";
  const [credit, SetCredit] = "";
  const [tags, setTags] = "";
  const [content1, SetContent1] = "";
  const [content2, SetContent2] = "";
  const [content3, SetContent3] = "";
  const [content4, SetContent4] = "";
  const [content5, SetContent5] = "";
  const [content6, SetContent6] = "";
  const [content7, SetContent7] = "";
  const [content8, SetContent8] = "";
  const [content9, SetContent9] = "";
  const [content10, SetContent10] = "";
  const [content11, SetContent11] = "";
  const [content12, SetContent12] = "";
  const [content13, SetContent13] = "";
  const [content14, SetContent14] = "";
  const [content15, SetContent15] = "";
  const [content16, SetContent16] = "";
  const [content17, SetContent17] = "";
  const [content18, SetContent18] = "";
  const [content19, SetContent19] = "";
  const [content20, SetContent20] = "";
  const [images, setImages] = [];
  //

  return (
    <DestinationDataContect.Provider
      value={{
        //small preview
        titileImg,
        setTitileImg,
        id,
        setId,
        topic,
        SetTopic,
        credit,
        SetCredit,
        tags,
        setTags,
        content1,
        SetContent1,
        content2,
        SetContent2,
        content3,
        SetContent3,
        content4,
        SetContent4,
        content5,
        SetContent5,
        content6,
        SetContent6,
        content7,
        SetContent7,
        content8,
        SetContent8,
        content9,
        SetContent9,
        content10,
        SetContent10,
        content11,
        SetContent11,
        content12,
        SetContent12,
        content13,
        SetContent13,
        content14,
        SetContent14,
        content15,
        SetContent15,
        content16,
        SetContent16,
        content17,
        SetContent17,
        content18,
        SetContent18,
        content19,
        SetContent19,
        content20,
        SetContent20,
      }}>
      {props.children}
    </DestinationDataContect.Provider>
  );
}
const useDestinationData = () => React.useContext(DestinationDataContect);
export { DestinationDataProvider, useDestinationData };
