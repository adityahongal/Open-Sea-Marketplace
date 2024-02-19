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
  const data = [
    { id: 1,
      image:"https://i.seadn.io/s/raw/files/a286fdea90dbe8b96ea1c274aff1576f.jpg",
      title:"Origami Ape",
      floor: 2.45,
    },
    { id: 2,
      image:"https://i.seadn.io/s/raw/files/a24b23968a93875707c783dba76741b3.png",
      title:"Contra boy #01",
      floor: 16.3,
    },
    { id: 3,
      image:"https://i.seadn.io/s/raw/files/b49c1f1e10a8baff54f2bb44ae877fcf.png",
      title:"basha bhai #786",
      floor: 0.05,
    },
    { id: 4,
      image:"https://i.seadn.io/s/raw/files/10e521accd2247793bd64886a7136f45.jpg",
      title:"Justin odisho #089",
      floor: 8.6,
    },
    { id: 5,
      image:"https://i.seadn.io/s/raw/files/517c22dea837ad7946c9e22141bca5ac.gif",
      title:"Bekkin Hada #698",
      floor: 0.05,
    },
    { id: 6,
      image:"https://i.seadn.io/gcs/files/a24740de38bf1af29bd6a69e5acac40b.png",
      title:"Piller Patil #69",
      floor: 0.05,
    },
    { id: 7,
      image:"https://i.seadn.io/s/raw/files/ae0fc06714ff7fb40217340d8a242c0e.gif",
      title:"Ammani Paapu #11",
      floor: 0.05,
    },
    { id: 8,
      image:"https://i.seadn.io/s/raw/files/6d460bf95261c56d99fee6d64eb031c0.jpg",
      title:"Flower girls #9343",
      floor: 0.05,
    },
  ];

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
      {data.map((item) => (
        <SwiperSlide key={item.id}>
        <Card maxW="sm" minw="200" _hover={{ background: "red.100", cursor: "pointer" }}>
          <CardBody>
            <Image
              src={item.image}
              alt={item.title}
              borderRadius="lg"
              objectFit={"cover"}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                {item.title}
                </Heading>
              <Text color="blue.600" fontSize="1xl">
                Floor: {item.floor} ETH
              </Text>
            </Stack>
          </CardBody>
          </Card>
          </SwiperSlide>
      ))}
     
    </Swiper>
    // </Flex>
  );
};

export default Landing;
