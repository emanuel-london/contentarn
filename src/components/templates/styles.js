import React from 'react'; 
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "flex-start",
  },
  welcome: {
    textAlign: 'center'
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5
  },
  h2: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5
  },
  h4: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5
  },
  h5: {
    fontWeight: "bold",
    fontSize: 20,
  },
  h6: {
    fontWeight: "bold",
    fontSize: 18,
  },
  inlineText: {
    flex: 1
  },
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 15
  },
  icon: {
    textAlign: "right",
    flex: 1,
    marginRight: 10,
    paddingRight: 10,
    width: 90,
    flexDirection:  "column",
    flex: 1
  },
  logo: {
    width: 240,
    marginTop: 30,
    flexDirection: "row",
    flex: 1
  },
  iconRight: {
    marginTop:20,
    width: 90,
    flexDirection: "row",
  },
  titleLink: {
    fontSize: 20,
    fontWeight: "500",
    color: "blue",
    marginBottom: 5,
    marginTop: 5
  },
  link: {
    color: "blue",
    flex: 1,
    flexDirection: "column"
  },
  columnLeft: {
    flexDirection:  "column",
    flex: 1
  },
  columnRight: {
     flexDirection:  "column",
     flex: 1
  },
  row: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    alignItems:'center',
    flexDirection: "row",
    alignSelf: "center"
  },
  eachNav: {
    margin:10,
    padding:8,
    borderWidth:1,
    borderColor:'#333'
  }
});