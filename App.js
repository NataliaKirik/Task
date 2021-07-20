/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Message } from "./components/Message";

const App = () => {
  const [data, setData] = React.useState([
    {
      "title": "The classic latin passage that just never gets old",
      // "photo": "001.png",
      "photo": require("./avatars/001.png"),
      "name": "Zephor",
      "replies": 10,
      "date": "2012-05-23T12:44:00Z",
      "like": true,
    },
    {
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "photo": require("./avatars/002.png"),
      "name": "Sulight",
      "replies": 23,
      "date": "2012-05-13T12:44:00Z",
      "like": false,
    },
    {
      "title": "If you haven't seen Game of Thrones",
      "photo": require("./avatars/003.png"),
      "name": "Surana",
      "replies": 56,
      "date": "2012-01-04T12:44:00Z",
      "like": true,
    },
    {
      "title": "In case you don't read Twitter, the news, or just can't get enough",
      "photo": require("./avatars/004.png"),
      "name": "Cheevor",
      "replies": 17,
      "date": "2012-02-12T12:44:00Z",
      "like": true,
    },
    {
      "title": "Lorem Ipsum is the single greatest threat",
      "photo": require("./avatars/005.png"),
      "name": "Wuland",
      "replies": 65,
      "date": "2012-08-03T12:44:00Z",
      "like": true,
    },
    {
      "title": "We are not - we are not keeping up with other websites",
      "photo": require("./avatars/006.png"),
      "name": "Yootanu",
      "replies": 75,
      "date": "2012-10-07T12:44:00Z",
      "like": false,
    },
    {
      "title": "Lorem Ipsum best not make any more threats to your website",
      "photo": require("./avatars/007.png"),
      "name": "Vornax",
      "replies": 22,
      "date": "2012-11-22T12:44:00Z",
      "like": true,
    },
    {
      "title": "It will be met with fire and fury like the world has never seen",
      "photo": require("./avatars/008.png"),
      "name": "Ludeon",
      "replies": 32,
      "date": "2012-04-06T12:44:00Z",
      "like": false,
    },
    {
      "title": "Does everybody know that pig named Lorem Ipsum",
      "photo": require("./avatars/009.png"),
      "name": "Ultimate",
      "replies": 34,
      "date": "2012-05-13T12:44:00Z",
      "like": false,
    },
    {
      "title": "An ‘extremely credible source’ has called my office",
      "photo": require("./avatars/010.png"),
      "name": "Superior",
      "replies": 56,
      "date": "2012-05-11T12:44:00Z",
      "like": true,
    },
    {
      "title": "A handcrafted, small-batch, artisinal pour-over version",
      "photo": require("./avatars/011.png"),
      "name": "Starlight",
      "replies": 7,
      "date": "2012-05-13T12:44:00Z",
      "like": true,
    },
    {
      "title": "Hipster Ipsum will give your mocks that blue collar touch",
      "photo": require("./avatars/012.png"),
      "name": "Sunlight",
      "replies": 6,
      "date": "2012-05-15T12:44:00Z",
      "like": false,
    },
    {
      "title": "Lorem ipsum dolor amet mustache knausgaard",
      "photo": require("./avatars/013.png"),
      "name": "Greengrow",
      "replies": 56,
      "date": "2012-05-18T12:44:00Z",
      "like": false,
    },
    {
      "title": "Raise your design from the dead with",
      "photo": require("./avatars/014.png"),
      "name": "Grassland",
      "replies": 48,
      "date": "2012-05-21T12:44:00Z",
      "like": true,
    },
    {
      "title": "Try the lorem ipsum of the undead",
      "photo": require("./avatars/015.png"),
      "name": "Zarimax",
      "replies": 92,
      "date": "2012-05-22T12:44:00Z",
      "like": false,
    },
    {
      "title": "Zombie ipsum reversus ab viral inferno",
      "photo": require("./avatars/016.png"),
      "name": "Albium",
      "replies": 54,
      "date": "2012-05-24T12:44:00Z",
      "like": true,
    },
    {
      "title": "De carne lumbering animata corpora quaeritis",
      "photo": require("./avatars/017.png"),
      "name": "Terroid",
      "replies": 47,
      "date": "2012-05-26T12:44:00Z",
      "like": false,
    },
    {
      "title": "Summus brains sit​​, morbo vel maleficia?",
      // "photo": "018.png",
      "photo": require("./avatars/018.png"),
      "name": "Nouveau",
      "replies": 10,
      "date": "2012-05-27T12:44:00Z",
      "like": true,
    },
    {
      "title": "De apocalypsi gorger omero undead survivor dictum mauris",
      "photo": require("./avatars/019.png"),
      "name": "Cranktown",
      "replies": 52,
      "date": "2012-07-09T12:44:00Z",
      "like": false,
    },
    {
      "title": "Then Bacon Ipsum is the placeholder text generator for you.",
      "photo": require("./avatars/020.png"),
      "name": "Lightmass",
      "replies": 64,
      "date": "2012-02-03T12:44:00Z",
      "like": false,
    },
    {
      "title": "Like your lorem ipsum extra crispy",
      "photo": require("./avatars/021.png"),
      "name": "Sinleth",
      "replies": 10,
      "date": "2012-02-06T12:44:00Z",
      "like": true,
    },
    {
      "title": "Bacon ipsum dolor amet short ribs brisket venison",
      "photo": require("./avatars/022.png"),
      "name": "Yrath",
      "replies": 88,
      "date": "2012-07-03T12:44:00Z",
      "like": true,
    },
    {
      "title": "Doner spare ribs andouille bacon sausage",
      "photo": require("./avatars/023.png"),
      "name": "Yulten",
      "replies": 7,
      "date": "2012-01-01T12:44:00Z",
      "like": true,
    },
    {
      "title": "Ground round jerky brisket pastrami shank",
      "photo": require("./avatars/024.png"),
      "name": "Dorth",
      "replies": 65,
      "date": "2012-02-02T12:44:00Z",
      "like": false,
    },
    // {
    //   "title": "Sugary sweet lorem ipsum?",
    //   "photo": "025.png",
    //   "name": "Treal",
    //   "replies": 66,
    //   "date": "2012-03-03T12:44:00Z",
    //   "like": false,
    // },
    // {
    //   "title": "Sit amet marshmallow topping cheesecake muffin",
    //   "photo": "026.png",
    //   "name": "Lordium",
    //   "replies": 77,
    //   "date": "2012-04-04T12:44:00Z",
    //   "like": true,
    // },
    // {
    //   "title": "Halvah croissant candy canes bonbon candy",
    //   "photo": "027.png",
    //   "name": "Novunis",
    //   "replies": 15,
    //   "date": "2012-05-05T12:44:00Z",
    //   "like": true,
    // },
    // {
    //   "title": "Apple pie jelly beans topping carrot cake danish tart cake cheesecake",
    //   "photo": "028.png",
    //   "name": "Stellaris",
    //   "replies": 16,
    //   "date": "2012-06-06T12:44:00Z",
    //   "like": false,
    // },
    // {
    //   "title": "Powder cake jujubes oat cake",
    //   "photo": "029.png",
    //   "name": "Humantic",
    //   "replies": 18,
    //   "date": "2012-07-07T12:44:00Z",
    //   "like": true,
    // },
    // {
    //   "title": "Delorean Ipsum uses the script from Back",
    //   "photo": "030.png",
    //   "name": "Accurate",
    //   "replies": 24,
    //   "date": "2012-08-08T12:44:00Z",
    //   "like": false,
    // },
    // {
    //   "title": "Just say anything, George, say what ever's natural",
    //   "photo": "031.png",
    //   "name": "Steelium",
    //   "replies": 29,
    //   "date": "2012-09-09T12:44:00Z",
    //   "like": true,
    // },
    // {
    //   "title": "You do? Yeah, it's 8:00. Hey, McFly, I thought I told",
    //   "photo": "032.png",
    //   "name": "Meush",
    //   "replies": 30,
    //   "date": "2012-10-10T12:44:00Z",
    //   "like": false,
    // },
    // {
    //   "title": "Explore the far reaches of the galaxy with this space-themed",
    //   "photo": "033.png",
    //   "name": "Luxitor",
    //   "replies": 54,
    //   "date": "2012-11-09T12:44:00Z",
    //   "like": true,
    // },
    // {
    //   "title": "Space, the final frontier. These are the voyages of the Starship",
    //   "photo": "034.png",
    //   "name": "Multica",
    //   "replies": 73,
    //   "date": "2012-11-19T12:44:00Z",
    //   "like": false,
    // },
    // {
    //   "title": "Its five-year mission: to explore strange new worlds",
    //   "photo": "035.png",
    //   "name": "Sundrium",
    //   "replies": 25,
    //   "date": "2012-12-08T12:44:00Z",
    //   "like": true,
    // },
    // {
    //   "title": "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery",
    //   "photo": "036.png",
    //   "name": "Lorne",
    //   "replies": 2,
    //   "date": "2012-03-23T12:44:00Z",
    //   "like": false,
    // },
  ]);
  // const dataNew = data.map(obj => ({ ...obj, photoLink: require(`./avatars/${obj.photo}`) }));

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Message {...item} />)}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: "3%",
    paddingHorizontal: "3%",
    backgroundColor: "#cdcdd7",
  },

});
export default App;