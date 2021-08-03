import axios from 'axios'

export const IP='http://192.168.48.53:8080'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/',
})


export const commonAPI = {
    getForumAllData() {
        return instance.get<ForumAllDataResponseType>(`forum/all`)
    },
    addChatUserData(senderName: string, message: string) {
        return instance.post(`chat/add`, {
            senderName, receiverName: 'me', message
        })
    },
    getChatUserData() {
        return instance.get(`chat/all`)
    }

}


//types
export type ForumAllDataResponseType = {
    data: Array<ForumUserDataType>
    status: number
    statusText: undefined
    headers: {}
    config: {}
    request: {}
}
export type ForumUserDataType = {
    title: string
    photo: string
    name: string
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