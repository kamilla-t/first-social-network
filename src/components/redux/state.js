import { rerenderEntireTree } from "../../render"

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 11 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How was your day?' },
            { id: 3, message: 'Sounds good' },
            { id: 4, message: 'Sounds good' },
            { id: 5, message: 'Sounds good' }
        ]
    }
}

export let addMessage = (messageMessage) => {
    let newMessage = {
        id:5,
        message:messageMessage,
        likesCount:0
    }
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireTree(state);
}

export let addPost = (postMessage) => {
debugger;
    let newPost = {
        id:5,
        message:postMessage,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}

export default state; 