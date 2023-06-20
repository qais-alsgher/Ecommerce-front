import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";

import { keyframes } from "@emotion/react";

const NotFoundPage = () => {
  const { colorMode } = useColorMode();
  const boxShadowVal =
    "571px 173px #00BCD4, 1732px 143px #00BCD4, 1745px 454px #FF5722, 234px 784px #00BCD4, 1793px 1123px #FF9800, 1076px 504px #03A9F4, 633px 601px #FF5722, 350px 630px #FFEB3B, 1164px 782px #00BCD4, 76px 690px #3F51B5, 1825px 701px #CDDC39, 1646px 578px #FFEB3B, 544px 293px #2196F3, 445px 1061px #673AB7, 928px 47px #00BCD4, 168px 1410px #8BC34A, 777px 782px #9C27B0, 1235px 1941px #9C27B0, 104px 1690px #8BC34A, 1167px 1338px #E91E63, 345px 1652px #009688, 1682px 1196px #F44336, 1995px 494px #8BC34A, 428px 798px #FF5722, 340px 1623px #F44336, 605px 349px #9C27B0, 1339px 1344px #673AB7, 1102px 1745px #3F51B5, 1592px 1676px #2196F3, 419px 1024px #FF9800, 630px 1033px #4CAF50, 1995px 1644px #00BCD4, 1092px 712px #9C27B0, 1355px 606px #F44336, 622px 1881px #CDDC39, 1481px 621px #9E9E9E, 19px 1348px #8BC34A, 864px 1780px #E91E63, 442px 1136px #2196F3, 67px 712px #FF5722, 89px 1406px #F44336, 275px 321px #009688, 592px 630px #E91E63, 1012px 1690px #9C27B0, 1749px 23px #673AB7, 94px 1542px #FFEB3B, 1201px 1657px #3F51B5, 1505px 692px #2196F3, 1799px 601px #03A9F4, 656px 811px #00BCD4, 701px 597px #00BCD4, 1202px 46px #FF5722, 890px 569px #FF5722, 1613px 813px #2196F3, 223px 252px #FF9800, 983px 1093px #F44336, 726px 1029px #FFC107, 1764px 778px #CDDC39, 622px 1643px #F44336, 174px 1559px #673AB7, 212px 517px #00BCD4, 340px 505px #FFF, 1700px 39px #FFF, 1768px 516px #F44336, 849px 391px #FF9800, 228px 1824px #FFF, 1119px 1680px #FFC107, 812px 1480px #3F51B5, 1438px 1585px #CDDC39, 137px 1397px #FFF, 1080px 456px #673AB7, 1208px 1437px #03A9F4, 857px 281px #F44336, 1254px 1306px #CDDC39, 987px 990px #4CAF50, 1655px 911px #00BCD4, 1102px 1216px #FF5722, 1807px 1044px #FFF, 660px 435px #03A9F4, 299px 678px #4CAF50, 1193px 115px #FF9800, 918px 290px #CDDC39, 1447px 1422px #FFEB3B, 91px 1273px #9C27B0, 108px 223px #FFEB3B, 146px 754px #00BCD4, 461px 1446px #FF5722, 1004px 391px #673AB7, 1529px 516px #F44336, 1206px 845px #CDDC39, 347px 583px #009688, 1102px 1332px #F44336, 709px 1756px #00BCD4, 1972px 248px #FFF, 1669px 1344px #FF5722, 1132px 406px #F44336, 320px 1076px #CDDC39, 126px 943px #FFEB3B, 263px 604px #FF5722, 1546px 692px #F44336";

  const move = keyframes`
    0% {
        transform: rotate(40deg);
    }
    50% {
        transform: rotate(-40deg);
    }
    100% {
        transform: rotate(40deg);
    }
`;

  const animStar = keyframes`
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(-2000px);
    }
`;

  return (
    <Box
      position={"relative"}
      maxW={"100vw"}
      maxH={"100vh"}
      overflow={"hidden"}
    >
      <Box
        position="relative"
        _before={{
          content: "' '",
          bgImg: `url(https://1.bp.blogspot.com/-gxsOcYWghHA/Xp_izTh4sFI/AAAAAAAAU8s/y637Fwg99qAuzW9na_NT_uApny8Vce95gCEwYBhgL/s1600/header-footer-gradient-bg.png)`,
          display: "block",
          width: "100%",
          height: "8px",
          bgRepeat: "repeat",
          bgSize: "contain",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.5,
          zIndex: 1000,
        }}
      ></Box>

      <Box>
        <Box
          content=" "
          position="absolute"
          width="3px"
          height="3px"
          bg="transparent"
          boxShadow={boxShadowVal}
          animation={`${animStar} 150s linear infinite`}
        ></Box>
        <Box
          content=" "
          position="absolute"
          width="3px"
          height="3px"
          background="transparent"
          boxShadow={boxShadowVal}
          animation={`${animStar} 150s linear infinite`}
        ></Box>
        <Box
          content=" "
          position="absolute"
          width="2px"
          height="2px"
          background="transparent"
          boxShadow={boxShadowVal}
          animation={`${animStar} 150s linear infinite`}
        ></Box>
        <Box
          content=" "
          position="absolute"
          width="1px"
          height="1px"
          background="transparent"
          boxShadow={boxShadowVal}
          animation={`${animStar} 150s linear infinite`}
        ></Box>
      </Box>

      <Box maxH="100vh" overflow="hidden" maxW="100vw">
        <Box
          pos={"absolute"}
          left={0}
          right={0}
          top={0}
          margin="0px auto"
          w="300px"
          display="flex"
          flexDir="column"
          alignItems="center"
          transformOrigin="center top"
          animationTimingFunction="cubic-bezier(0.6, 0, 0.38, 1)"
          animation={`${move} 5.1s infinite`}
          zoom={{ lg: "0.5" }}
        >
          <Box
            w={"8px"}
            h={["200px", "240px"]}
            bgImg={`linear-gradient(rgb(32 148 218 / 70%), rgb(193 65 25)), linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))`}
          ></Box>
          <Box
            w={"200px"}
            h={"80px"}
            bg={"#0bd5e8"}
            borderTopLeftRadius={"50%"}
            borderTopRightRadius={"50%"}
            pos={"relative"}
            zIndex={200}
          ></Box>
          <Box
            w={"100%"}
            maxW={"200px"}
            h={"20px"}
            margin="0px auto"
            borderRadius={"100%"}
            bg={"#08ffff"}
            pos={"absolute"}
            left={0}
            right={0}
            bottom={-2}
            zIndex={100}
          >
            <Box
              w={"50px"}
              h={"50px"}
              bg={"#08fffa"}
              borderRadius={"50%"}
              pos={"absolute"}
              left={0}
              right={0}
              bottom={-6}
              margin="0px auto"
              boxShadow={`0 0 15px 7px rgba(0,255,255,0.8), 0 0 40px 25px rgba(0,255,255,0.5), -75px 0 30px 15px rgba(0,255,255,0.2)`}
            ></Box>
          </Box>
          <Box
            w={"280px"}
            h={"0px"}
            borderBottom={"900px solid rgb(44 255 255 / 24%)"}
            borderLeft={"50px solid transparent"}
            borderRight={"50px solid transparent"}
            pos={"absolute"}
            left={0}
            right={0}
            top={270}
            margin="0px auto"
            zIndex={1}
            borderRadius={"90px 90px 0px 0px"}
          ></Box>
        </Box>
        <Box
          pos={"relative"}
          p={["120px 0", "200px 0"]}
          boxSizing={"border-box"}
          w={"100%"}
          h={"100%"}
          textAlign={"center"}
        >
          <Box
            p={"240px 0"}
            postion={"absolute"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Heading
              fontWeight={900}
              textTransform={"uppercase"}
              letterSpacing={"5px"}
              fontSize={[40, 50, 60, 70]}
              pb={[3, 5, 10]}
              maxW={"960px"}
              margin={"0 auto"}
            >
              Page Not Found
            </Heading>
            <Text
              fontWeight={680}
              fontSize={[16, 18, 20, 22, 24]}
              lineHeight={"42px"}
              padding={"0 60px"}
              color={colorMode === "light" ? "lightBlue.50" : "darkBlue.800"}
              maxW={"960px"}
            >
              We're sorry, the page you were looking for isn't found here. The
              link you followed may either be broken or no longer exists. Please
              try again.
            </Text>
            <Box mt={[3, 5, 10]}>
              <Button as={Link} to="/" variant="outline" colorScheme="teal">
                Go Home
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
