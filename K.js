row = " < div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

firebase.database().ref(Room_name).push({
    name:user_name,
    message:msg,
    like:0
});