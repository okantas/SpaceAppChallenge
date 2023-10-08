import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BookingSeats = () => {
  const initialSeatColors = Array(20).fill("white");

  const [seatColors, setSeatColors] = useState(initialSeatColors);
  const [modalVisible, setModalVisible] = useState(false);
  const [bookedSeats, setBookedSeats] = useState([]);

  const changeSeatColor = (seatIndex) => {
    const newSeatColors = [...seatColors];
    newSeatColors[seatIndex] =
      newSeatColors[seatIndex] === "white" ? "green" : "white";
    setSeatColors(newSeatColors);

    const newBookedSeats = [];
    newSeatColors.forEach((color, index) => {
      if (color === "green") {
        newBookedSeats.push(index + 1);
      }
    });
    setBookedSeats(newBookedSeats);
  };

  const generateBookingMessage = () => {
    if (bookedSeats.length === 0) {
      return "No seats are booked. Have a safe travel!";
    } else {
      return `${bookedSeats.join(
        ", "
      )} number seat(s) are booked. Have a safe travel!`;
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.seatContainer}>
        {[1, 2, 3, 4].map((column) => (
          <View style={styles.column} key={`column_${column}`}>
            {[1, 2, 3, 4, 5].map((row) => {
              const seatIndex = (column - 1) * 5 + (row - 1);
              return (
                <TouchableOpacity
                  key={`seat_${column}_${row}`}
                  onPress={() => changeSeatColor(seatIndex)}
                  style={styles.seatButton}
                >
                  <Image
                    style={[styles.seat, { tintColor: seatColors[seatIndex] }]}
                    source={require("../images/seat.png")}
                  />
                  <Text style={styles.seatNumber}>{seatIndex + 1}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.bookingWrapper}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.booking}>CLICK FOR BOOKING</Text>
      </TouchableOpacity>

      {/* Booking Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{generateBookingMessage()}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default BookingSeats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  seat: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  seatContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  column: {
    marginRight: 10,
  },
  seatButton: {
    alignItems: "center",
  },
  seatNumber: {
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
  },
  bookingWrapper: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 52,
    width: 300,
    alignSelf: "center",
    marginTop: 40,
  },
  booking: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    alignSelf: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
