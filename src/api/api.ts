import axios from 'axios';

export const IP = 'http://192.168.100.7:8080';
// export const IP = 'http://192.168.48.53:8080';
// const IPHome = 'http://192.168.100.7:8080';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://10.0.2.2:8080/'
});
// baseURL: 'http://localhost:8080/'
// baseURLHome: 'http://10.0.2.2:8080/'


export const commonAPI = {
    getForumAllData() {
        return instance.get<ForumUserDataType[]>(`forum/all`, {
            headers: {
                'X-User-Name': '123'
            }
        }).then(res => res.data);
    },
    addChatUserData(senderName: string, message: string) {
        return instance.post(`chat/add`, {
            senderName, receiverName: 'me', message
        });
    },
    getChatUserData() {
        return instance.get<ChatUserDataType[]>(`chat/all`).then(res => res.data);
    }

};


//types
export type ForumUserDataType = {
    id: number
    title: string
    photo: string
    owner: string
    replies: number
    date: string
    like: boolean
}
export type ChatUserDataType = {
    senderName: string
    receiverName: string
    message: string
    id: string
    date: string
}
