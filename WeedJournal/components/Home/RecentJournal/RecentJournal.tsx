import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SpaceGrotesk, SpaceGroteskBold } from '../../StyledText';

import { ColorView, TouchableOpacity, View } from '../../Themed';
import JournalEntry from '../JournalEntry/JournalEntry';

export default function RecentJournal({ open }) {

    const truncateEntry = (entry: string) => {
        if (entry.length <= 360) {
            return entry;
        } else {
            return(entry.slice(0, 360) + "...")
        }
    }

    const lorenIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const example2 = "Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Euismod quis viverra nibh cras. A iaculis at erat pellentesque. Purus semper eget duis at tellus at. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Cursus mattis molestie a iaculis at erat pellentesque. Id faucibus nisl tincidunt eget nullam non. Nibh sit amet commodo nulla facilisi. Ac tortor vitae purus faucibus ornare suspendisse sed. Egestas congue quisque egestas diam. Ullamcorper malesuada proin libero nunc consequat interdum varius. Nunc congue nisi vitae suscipit tellus. Platea dictumst vestibulum rhoncus est. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Sagittis eu volutpat odio facilisis mauris sit amet massa. Lacus vel facilisis volutpat est velit. Adipiscing elit ut aliquam purus sit amet. Ornare lectus sit amet est placerat in. Faucibus a pellentesque sit amet."
    const example3 = "Quis eleifend quam adipiscing vitae proin sagittis nisl. Nullam ac tortor vitae purus faucibus ornare suspendisse. Aliquet bibendum enim facilisis gravida neque convallis a. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. In eu mi bibendum neque egestas congue quisque egestas diam. Feugiat nibh sed pulvinar proin gravida. Elit ut aliquam purus sit amet luctus venenatis. Erat imperdiet sed euismod nisi porta lorem. Iaculis nunc sed augue lacus. At urna condimentum mattis pellentesque id nibh. Et netus et malesuada fames ac turpis egestas. Amet aliquam id diam maecenas ultricies. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sed lectus vestibulum mattis ullamcorper velit. At urna condimentum mattis pellentesque id nibh tortor. Arcu ac tortor dignissim convallis aenean et. Justo nec ultrices dui sapien eget mi proin sed. Eget mauris pharetra et ultrices neque ornare aenean euismod. Urna molestie at elementum eu facilisis sed odio morbi quis.";
    const example4 = "Mollis aliquam ut porttitor leo a diam. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nam aliquam sem et tortor consequat id porta. Sed id semper risus in hendrerit gravida rutrum. Eget lorem dolor sed viverra ipsum. Fermentum dui faucibus in ornare. Quis vel eros donec ac odio tempor orci. Id leo in vitae turpis massa sed elementum tempus egestas. Metus dictum at tempor commodo ullamcorper a. Id porta nibh venenatis cras sed.";
    const example5 = "Iaculis at erat pellentesque adipiscing. Ac odio tempor orci dapibus ultrices in. Diam quam nulla porttitor massa id. Odio euismod lacinia at quis risus sed vulputate. Commodo elit at imperdiet dui accumsan sit. Augue eget arcu dictum varius duis. In massa tempor nec feugiat nisl. Nisl tincidunt eget nullam non. In nibh mauris cursus mattis. Dictumst vestibulum rhoncus est pellentesque. Morbi leo urna molestie at elementum eu. Ut placerat orci nulla pellentesque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Neque viverra justo nec ultrices.";

    const entries = [
        {date: "June 7, 2023", time: "4:05 pm", title: "Peach Fuzz", entry: lorenIpsum},
        {date: "June 24, 2023", time: "1:00 pm", title: "Pirate Cake", entry: example2},
        {date: "June 9, 2023", time: "12:05 am", title: "Green Crack", entry: example3},
        {date: "May 20, 2022", time: "6:30 pm", title: "MAC-10", entry: example4},
        {date: "January 1, 2020", time: "12:01 am", title: "Gelato", entry: example5},
    ]

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index == entries.length - 1) {
            setIndex(0);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    }

    const handlePrevious = () => {
        if (index == 0) {
            setIndex(entries.length - 1);
        } else {
            setIndex((prevIndex) => prevIndex - 1);
        }
    }

    return (
        <View style={styles.container}>
            <SpaceGroteskBold style={styles.title}>Recent Journal Entries</SpaceGroteskBold>
            <TouchableOpacity onPress={() => open(entries[index])}>
                <JournalEntry journal={entries[index]} handleNext={handleNext} handlePrevious={handlePrevious} short={true}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
},
  newPostButton: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
