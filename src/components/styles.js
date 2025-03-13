import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 13 },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
      borderBottomWidth: 2,
      borderBottomColor: "#6B21A8",
      paddingBottom: 10,
    },
    logo: { width: "auto", height: "60px", objectFit: "contain" },
    headerText: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#6B21A8",
    },
    section: { marginBottom: 10 },
    footerSection: { marginBottom: 10,color:"gray",fontStyle:"italic", marginTop: 10 },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
      color: "#6B21A8",
    },
    text: { fontSize: 14, marginBottom: 5 },
    boldText: { fontWeight: "bold", color: "#000" },
    personsInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
  
      marginBottom: 5,
    },
    invoiceInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#F3E8FF",
      padding: 10,
      borderRadius: 5,
      marginBottom: 5,
    },
    table: {
      display: "table",
      width: "100%",
      borderStyle: "solid",
      borderWidth: 1,
      marginTop: 10,
    },
    row: {
      flexDirection: "row",
      backgroundColor: "#F3E8FF",
      padding: 5,
    },
    smallHeader: {
      borderWidth: 1,
      padding: 8,
      width: "10%",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "#6B21A8",
      color: "#fff",
    },
    descriptionHeader: {
      borderWidth: 1,
      padding: 8,
      width: "50%",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "#6B21A8",
      color: "#fff",
    },
    priceHeader: {
      borderWidth: 1,
      padding: 8,
      width: "15%",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "#6B21A8",
      color: "#fff",
    },
    totalHeader: {
      borderWidth: 1,
      padding: 8,
      width: "25%",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "#6B21A8",
      color: "#fff",
    },
    smallCell: {
      borderWidth: 1,
      padding: 8,
      width: "10%",
      textAlign: "center",
    },
    descriptionCell: {
      borderWidth: 1,
      padding: 8,
      width: "50%",
      textAlign: "center",
    },
    priceCell: {
      borderWidth: 1,
      padding: 8,
      width: "15%",
      textAlign: "center",
    },
    totalCell: {
      borderWidth: 1,
      padding: 8,
      width: "25%",
      textAlign: "center",
    },
    footer: {
      marginTop: 20,
      textAlign: "center",
      fontSize: 12,
      fontStyle: "italic",
      borderTopWidth: 1,
      paddingTop: 10,
    },
    bottomContainer: { display: "flex", flexDirection: "row" },
    payContainer: {
      width: "40%",
      alignItems: "center",
      padding: 10,
    },
    container: {
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
    bottomBox: {
      backgroundColor: "#fff", // Dark purple background
      padding: 10,
  
      width: "100%", // Set the width as needed
      marginVertical: 10, // Vertical margin between multiple boxes
      shadowColor: "#000", // Shadow effect
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      border: "2px solid #6B21A8",
      shadowRadius: 6,
      elevation: 5, // For Android shadow
    },
    bottomRow: {
      flexDirection: "row",
      justifyContent: "space-between", // Align label left, value right
      borderBottomWidth: 1, // Bottom border to separate items
      borderBottomColor: "#D1D5DB", // Light gray border color
      paddingVertical: 10, // Padding for each row
    },
    bottomText: {
      fontSize: 16,
      color: "#000", // White text for labels
    },
    bottomBoldText: {
      fontWeight: "bold",
      color: "#000", // Light gray for values to create contrast
    },
  });