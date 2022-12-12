import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Box,
  FormLabel,
  Input,
  useDisclosure,
  InputGroup,
  InputLeftAddon,
  DrawerFooter,
} from "@chakra-ui/react";
import React from "react";

function CreateProductDrawer({ create }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [product, setProduct] = React.useState({});

  const handleSubmit = () => {
    create(product);
    onClose();
    setProduct({});
  };

  return (
    <>
      <Button
        colorScheme="telegram"
        onClick={onOpen}
        position="absolute"
        right="400px"
        mt="2em"
      >
        Create product
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new product
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  ref={firstField}
                  id="name"
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  placeholder="Please enter a name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="price">Price</FormLabel>
                <InputGroup>
                  <InputLeftAddon>$</InputLeftAddon>
                  <Input
                    type="numeric"
                    id="price"
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                    placeholder="Please enter a price"
                  />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="quantity">Quantity</FormLabel>
                <InputGroup>
                  <Input
                    type="numeric"
                    id="quantity"
                    onChange={(e) =>
                      setProduct({ ...product, quantity: e.target.value })
                    }
                    placeholder="Please enter a quantity"
                  />
                </InputGroup>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CreateProductDrawer;
