import {
  Document,
  Image,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

// Styles for PDF
import { styles } from "./styles";

const InvoicePDF = ({ invoice }) => {
  if (!invoice) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.headerText}>Error: Invoice data is missing</Text>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerContainer}>
          {invoice.logoUrl ? (
            <Image src={invoice.logoUrl} style={styles.logo} />
          ) : (
            <Text style={styles.text}>[No Logo Available]</Text>
          )}
          <Text style={styles.headerText}>Invoice</Text>
        </View>

        {/* Invoice Info */}
        <View style={styles.invoiceInfo}>
          <Text style={styles.text}>
            <Text style={styles.sectionTitle}>Invoice No:</Text>{" "}
            <Text style={styles.boldText}>{invoice.invoiceNo || "N/A"}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.sectionTitle}>Date:</Text>{" "}
            <Text style={styles.boldText}>{invoice.date || "N/A"}</Text>
          </Text>
        </View>

        <View style={styles.personsInfo}>
          {/* Psychologist & Client Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Psychologist Details</Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>{invoice.psychologist || "N/A"}</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>{invoice.address || "N/A"}</Text>
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Bill To:</Text>
            <Text style={styles.boldText}>{invoice.client || "N/A"}</Text>
            <Text style={styles.boldText}>D.O.B: {invoice.dob || "N/A"}</Text>
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
          {invoice.items && invoice.items.length > 0 ? (
            invoice.items.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.smallCell}>{item.quantity || 0}</Text>
                <Text style={styles.descriptionCell}>{item.name || "N/A"}</Text>
                <Text style={styles.priceCell}>£{item.price || 0}</Text>
                <Text style={styles.totalCell}>£{(item.price || 0) * (item.quantity || 0)}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.text}>No items available</Text>
          )}
        </View>

        {/* Total Summary */}
        <View style={styles.bottomContainer}>
          <View style={styles.payContainer}>
            <View style={styles.bottomBox}>
              <Text style={styles.sectionTitle}>Please Pay To:</Text>
              <Text style={styles.boldText}>J Hossain</Text>
              <Text style={styles.boldText}>SC : 04-00-03</Text>
              <Text style={styles.boldText}>ACC : 89667758</Text>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.bottomBox}>
              <View style={styles.bottomRow}>
                <Text style={styles.bottomText}>Subtotal:</Text>
                <Text style={styles.bottomBoldText}>£{invoice.subtotal || 0}</Text>
              </View>
              <View style={styles.bottomRow}>
                <Text style={styles.bottomText}>Discount:</Text>
                <Text style={styles.bottomBoldText}>£{invoice.discount || 0}</Text>
              </View>
              <View style={styles.bottomRow}>
                <Text style={styles.bottomText}>Total:</Text>
                <Text style={styles.bottomBoldText}>£{invoice.total || 0}</Text>
              </View>
              <View style={styles.bottomRow}>
                <Text style={styles.bottomText}>Total in Words:</Text>
                <Text style={styles.bottomBoldText}>{invoice.totalInWords || "N/A"}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          It has been a pleasure doing business with you. Thank You!
        </Text>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
