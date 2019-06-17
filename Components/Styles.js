import { StyleSheet } from "react-native"

const viewStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    title: {
        fontSize: 30,
        color: '#FFF',
        marginTop: 10,
        paddingHorizontal: 20,
        width: 160,
        opacity: 0.9
    },
});

const loginStyles =StyleSheet.create({

    container: {
       padding: 20,
        height: 500,
        flexDirection: "column"
    },
    logoContainer: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "flex-end",
        flexDirection: "column",
    },
    logo: {
        width: 100,
        height: 100
    },
    input: {
        height: 40,
        backgroundColor: "rgba(255,255,255,0.2)",
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: "#2980b9",
        paddingVertical: 15,

    },

    buttonText: {
        textAlign: "center",
            color: "#FFFFFF",
            fontWeight: "700"
    }

});

const headerStyles =StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 2,
        backgroundColor: '#2980b9'
    },
    headerText:{
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "700"
    }
});


export {viewStyle, loginStyles, headerStyles}