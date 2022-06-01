import { Box, Center, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Data, GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useMemo, useState } from "react";
import { CustomButton } from "../../../components/CustomButton";
import { OrderModal } from "./OrderModal";

const containerStyle = {
  width: "100%",
  height: "200px",
};

const center = {
  lat: 54.31857,
  lng: 48.39792,
};

export const Address = () => {
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAIokBCZFWjJQUQmvFQMZOQqcFWVrgnGxM",
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const onClick = (...args: any[]) => {
    console.log("Hello");

    console.log(
      "onClick args: ",
      args[0].latLng.lat(),
      " : ",
      args[0].latLng.lng()
    );
  };

  const dataOptions = useMemo<google.maps.Data.DataOptions | null>(() => {
    return map !== null
      ? {
          map,
          controlPosition: google.maps.ControlPosition.TOP_LEFT,
          controls: ["Point"],
          drawingMode: "Point", //  "LineString" or "Polygon".
          featureFactory: (geometry: any): google.maps.Data.Feature => {
            setCoordinates({ lat: geometry.h.lat(), lng: geometry.h.lng() });

            console.log("geometry: ", geometry.h.lat(), geometry.h.lng());

            return new google.maps.Data.Feature({
              id: "1",
              geometry,
            });
          },
        }
      : null;
  }, [map]);

  const onDataLoad = (data: google.maps.Data) => {
    console.log("data: ", data);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return isLoaded ? (
    <>
      <OrderModal isOpen={isOpen} onClose={onClose} address={coordinates} />
      <Box h="full" w="100%">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={onClick}
        >
          {dataOptions !== null ? (
            <Data onLoad={onDataLoad} options={dataOptions} />
          ) : null}
        </GoogleMap>
        <VStack>
          <Text>Ваш адрес</Text>
          <Text>Широта: {(+coordinates.lat).toFixed(2)}</Text>
          <Text>Долгота: {(+coordinates.lng).toFixed(2)}</Text>
        </VStack>
        <Center pt={{ base: 5, md: 10 }}>
          <CustomButton
            onClick={onOpen}
            //   onClick={() => navigate("/order/address")}
            colorScheme="green"
          >
            Заказать
          </CustomButton>
        </Center>
      </Box>
    </>
  ) : (
    <></>
  );
};
