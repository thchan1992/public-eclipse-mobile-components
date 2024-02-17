import { Modal, View } from "react-native";

//will be integrated into the npm package
export function CustomModal({ showModal, element }) {
  return (
    <Modal visible={showModal}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,
        }}
      >
        <View
          style={{
            margin: 50,
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowRadius: 4,
            // elevation: 5,
          }}
        >
          {/* <Text>hello</Text> */}
          <>{element}</>
        </View>
      </View>
    </Modal>
  );
}
