import { Card, CardBody, Flex } from "@chakra-ui/react";
import { Text, Image, Stack, Heading } from "@chakra-ui/react";
import { Autoplay, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

// import required modules
import { Pagination, Navigation } from 'swiper';

// import style from CSS
import "../../Assets/Landing.css";

const Landing = () => {
  return (
    // <Flex alignItems='center'>
    <Swiper
        slidesPerView="auto"
        spaceBetween={5}
        grid={{
          rows: 1,
        }}
        
        centeredSlides={false}
        observer={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Grid]}
        className="mySwiper"
      >
    
    <SwiperSlide>
    <Card maxW="sm" minw="200" _hover={{ background: "red.100", cursor: "pointer" }}>
      <CardBody>
        <Image
          src="https://i.seadn.io/s/raw/files/0a0bf8ac84328fd6d1a56442999a0567.jpg"
          alt="sequels"
          borderRadius="lg"
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            Sequels #004
            </Heading>
          <Text color="blue.600" fontSize="1xl">
            Floor: 2.45 ETH
          </Text>
        </Stack>
      </CardBody>
      </Card>
      </SwiperSlide>  

      <SwiperSlide>     
      <Card maxW="sm" minw="200" _hover={{ background: "red.100", cursor: "pointer" }}>
      <CardBody>
        <Image
          src="https://i.seadn.io/s/raw/files/a24b23968a93875707c783dba76741b3.png"
          alt="contra boy"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            Contra Boy
            </Heading>
          <Text color="blue.600" fontSize="1xl">
            Floor: 16.3 ETH
          </Text>
        </Stack>
      </CardBody>
    </Card>
    </SwiperSlide>
      
    <SwiperSlide> 
    <Card maxW="sm" minw="200" _hover={{ background: "red.100", cursor: "pointer" }}>
      <CardBody>
        <Image
          src="https://i.seadn.io/s/raw/files/10e521accd2247793bd64886a7136f45.jpg"
          alt="justin odisho"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            Justin Odisho #089
            </Heading>
          <Text color="blue.600" fontSize="1xl">
            Floor: 8.6 ETH
          </Text>
        </Stack>
      </CardBody>
    </Card>
    </SwiperSlide> 

    <SwiperSlide> 
    <Card maxW="sm" minw="200" _hover={{ background: "red.100", cursor: "pointer" }}>
      <CardBody>
        <Image
          src="https://i.seadn.io/s/raw/files/6d460bf95261c56d99fee6d64eb031c0.jpg"
          alt="Flower girls"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            Flower girls #9343
            </Heading>
          <Text color="blue.600" fontSize="1xl">
            Floor: 0.055 ETH
          </Text>
        </Stack>
      </CardBody>
    </Card>
    </SwiperSlide>

    <SwiperSlide> 
    <Card maxW="sm" minw="200" _hover={{ background: "red.100", cursor: "pointer" }}>
      <CardBody>
        <Image
          src="https://i.seadn.io/s/raw/files/6d460bf95261c56d99fee6d64eb031c0.jpg"
          alt="Flower girls"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            Flower girls #9343
            </Heading>
          <Text color="blue.600" fontSize="1xl">
            Floor: 0.055 ETH
          </Text>
        </Stack>
      </CardBody>
    </Card>
    </SwiperSlide>

    <SwiperSlide> 
    <Card maxW="sm" minw="200" _hover={{ background: "red.100", cursor: "pointer" }}>
      <CardBody>
        <Image
          src="https://i.seadn.io/s/raw/files/6d460bf95261c56d99fee6d64eb031c0.jpg"
          alt="Flower girls"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            Flower girls #9343
            </Heading>
          <Text color="blue.600" fontSize="1xl">
            Floor: 0.055 ETH
          </Text>
        </Stack>
      </CardBody>
    </Card>
    </SwiperSlide>
    </Swiper>
    // </Flex>
  );
};

export default Landing;
