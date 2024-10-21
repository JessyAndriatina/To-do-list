import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 20,
    },
    headerTitle: {
      fontSize: width / 20,
      fontWeight: 'bold',
      color: '#303030',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 2,
      textShadowColor: '#ccc',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 10,
    },
    listTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#720455',
      textAlign: 'center',
      letterSpacing: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    listContainer: {
      paddingBottom: 100,
    },
    item: {
      backgroundColor: '#fff',
      padding: 20,
      marginBottom: 10,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#303030',
      marginLeft: 10,
    },
    exportButton: {
      marginLeft: 'auto',
    },
    listContainerTitle: {
      marginLeft: 0,
    },
    floatingButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#68B684',
      borderRadius: 50,
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#68B684',
      height: height / 22,
    },
    searchInput: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
      color: '#303030',
    },
    searchIcon: {
      marginRight: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 60,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    submitButton: {
      backgroundColor: '#4CAF50',
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 20,
    },
    submitButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: 10,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      fontSize: 16,
      color: '#333333',
    },
    modalButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#be9fbf',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 20,
      width:'100%',
      height:70,
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
      marginLeft: 10,
    },
    headerTitle: {
      fontSize: width/30,
      fontWeight: 'bold',
      color: '#303030',
      textAlign: 'center', // Centrer le texte
      textShadowColor: '#ccc', // Couleur de l'ombre du texte
      textShadowOffset: { width: 2, height: 2 }, // Décalage de l'ombre
      textShadowRadius: 10, // Rayon de l'ombre
    }, 
    modalTitle: {
      fontSize: width/40,
      marginBottom: 10,
      marginTop: 10,
    },
    sortIcon: {
      marginLeft: 10,
      marginRight: 10,  
    },
    separator: {
      height: '70%', 
      width: 1,
      backgroundColor: '#68B684', 
      marginHorizontal: 10, 
    },
    filterOptionsContainer: {
      position: 'absolute',
      top: "15%", // Position sous la barre de recherche
      right: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      zIndex: 1,
    }, 
    filterOption: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    filterOptionText: {
      fontSize: 16,
      color: '#333',
    },
  });
  
  export default styles;