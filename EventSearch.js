import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, Pressable, TouchableOpacity } from 'react-native';
import axios from 'axios';

const TicketmasterSearch = () => {
const [query, setQuery] = useState('');
const [events, setEvents] = useState([]);
const [isListOpen, setIsListOpen] = useState(true); // State to track list visibility

const searchEvents = async () => {
try {
    const response = await axios.get(
    `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&apikey= qWRw7GlbmWKAazZGxG9twQHIyevKYHpA`
    );

    // Extract relevant data from the response
    const eventData = response.data._embedded?.events || [];

    setEvents(eventData);
} catch (error) {
    console.error('Error fetching events:', error.message);
}
};

const handleEventClick = (eventName) => {
// Update the search bar with the selected event's name
setQuery(eventName);
setIsListOpen(false);
};

return (
<View>
    <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, color: 'white' }}
    value={query}
    onChangeText={(text) => setQuery(text)}
    placeholder="Search for events..."
    />
    <Button title="Search" onPress={searchEvents} />
    {isListOpen&&(
    <FlatList
    data={events}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
    <TouchableOpacity onPress={() => handleEventClick(item.name)}>
        <View>
        <Text style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, color: 'white' }}>{item.name}</Text>
        </View>
        </TouchableOpacity>
    )}
    />
    )}
</View>
);
};

export default TicketmasterSearch;