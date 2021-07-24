import React from "react";
import {
  FooterContainer,
  Card,
  TextTitle,
  TextContent,
} from "./Footer.element";


const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Card>
          <TextTitle>อาจารย์ที่ปรึกษา</TextTitle>
          <TextContent>ชื่อ : อาจารย์อุมาภรณ์ สายแสงจันทร์</TextContent>
          <TextContent>อาจารย์ประจำภาควิชาวิทยาการคอมพิวเตอร์</TextContent>
          <TextContent>มหาวิทยาลัยมหาสารคาม</TextContent>
          <TextContent>อีเมล : umaporm.s@msu.ac.th</TextContent>
        </Card>
        <Card>
          <TextTitle>นิสิตผู้จัดทำ</TextTitle>
          <TextContent>ชื่อ : นายธนนชัย พาลิวงษ์</TextContent>
          <TextContent>นิสิตคณะวิทยาการสารสนเทศ (CS)</TextContent>
          <TextContent>มหาวิทยาลัยมหาสารคาม</TextContent>
          <TextContent>อีเมล : 60011212190@msu.ac.th</TextContent>
          <TextContent>เบอร์ติดต่อ : 062-492-5424</TextContent>
        </Card>
        <Card>
          <TextTitle>นิสิตผู้จัดทำ</TextTitle>
          <TextContent>ชื่อ : นางสาวประวีกร ขัติยนนท์</TextContent>
          <TextContent>นิสิตคณะวิทยาการสารสนเทศ (CS)</TextContent>
          <TextContent>มหาวิทยาลัยมหาสารคาม</TextContent>
          <TextContent>อีเมล : 60011222017@msu.ac.th</TextContent>
          <TextContent>เบอร์ติดต่อ : 082-903-9541</TextContent>
        </Card>
      </FooterContainer>
    </>
  );
};

export default Footer;
