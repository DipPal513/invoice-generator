import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// Styles for PDF
const styles = StyleSheet.create({
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
  footerSection: { marginBottom: 10, marginTop: 10 },
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
    width: "35%",
    alignItems: "center",
    padding: 15,
  },
  container: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  bottomBox: {
    backgroundColor: "#fff", // Dark purple background
    padding: 20,

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

const InvoicePDF = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image
          src="https://i.ibb.co.com/Z6TNNjC8/Whats-App-Image-2025-03-11-at-11-32-58-PM.jpg"
          style={styles.logo}
        />

        <Text style={styles.headerText}>Invoice</Text>
      </View>

      {/* Invoice Info */}
      <View style={styles.invoiceInfo}>
        <Text style={styles.text}>
          <Text style={styles.sectionTitle}>Invoice No:</Text>{" "}
          <Text style={styles.bold}>{invoice.invoiceNo}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.sectionTitle}>Date:</Text>{" "}
          <Text style={styles.text}>{invoice.date}</Text>
        </Text>
      </View>
      <View style={styles.personsInfo}>
        {/* Psychologist & Client Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Psychologist Details</Text>

          <Text style={styles.text}>
            <Text style={styles.boldText}>{invoice.psychologist}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.boldText}>{invoice.address}</Text>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bill To:</Text>
          <Text style={styles.boldText}>{invoice.client}</Text>
          <Text style={styles.boldText}>D.O.B: {invoice.dob}</Text>
        </View>
      </View>
      {/* Table */}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.smallHeader}>QTY</Text>
          <Text style={styles.descriptionHeader}>DESCRIPTION</Text>
          <Text style={styles.priceHeader}>UNIT COST</Text>
          <Text style={styles.totalHeader}>TOTAL</Text>
        </View>
        {invoice.items.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.smallCell}>{item.quantity}</Text>
            <Text style={styles.descriptionCell}>{item.name}</Text>
            <Text style={styles.priceCell}>£{item.price}</Text>
            <Text style={styles.totalCell}>£{item.price * item.quantity}</Text>
          </View>
        ))}
      </View>

      {/* Total Summary */}
      <View style={styles.bottomContainer}>
        <View style={styles.payContainer}>
          <View style={styles.bottomBox}>
            <Text style={styles.sectionTitle}>Please Pay To:</Text>
            <Text style={styles.bottomText}>J Hossain</Text>
            <Text style={styles.bottomText}>Account</Text>
            <View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.bottomBox}>
            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>Subtotal:</Text>
              <Text style={styles.bottomBoldText}>{invoice.subtotal}</Text>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>Discount:</Text>
              <Text style={styles.bottomBoldText}>£{invoice.discount}</Text>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>Total:</Text>
              <Text style={styles.bottomBoldText}>£{invoice.total}</Text>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>Total in Words:</Text>
              <Text style={styles.bottomBoldText}>{invoice.totalInWords}</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Footer */}
      <Text style={styles.footer}>Thank you for your business!</Text>
    </Page>
  </Document>
);

export default InvoicePDF;
