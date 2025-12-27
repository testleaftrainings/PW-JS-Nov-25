import axios from "axios"

const endpoint="https://manual-testing-demoproject.atlassian.net/rest/api/2/issue"
const username ="ravindranr90@gmail.com"
const apiKey = "ATATT3xFfGF0CpieBrSs-zKR6_yz8Rqgr-mu9eoCU5pHEkpdDdnQPBRlEFf1m9UKxpauphsMVLaoKd4DEk2owX_y_vbcOvV7ZiVn0NCUdqZ5SVSowc25COfkFtfCeAbKkOX0t9wOykCNyOHIBtTcoXqE69QgwuSB5q0Zfxl7A-dYmC6SfwnnJ9g=8E70FDF2"
const projectId="PN"


export async function createJiraIssue(summary:string, description:string){

const issueRequestJson = {
    "fields":{
        "project":{
            "key":projectId
        },
         "summary":summary,
    "description":description,
    "issuetype":{
        "name":"Bug"
    }
    }

}

await axios.post(endpoint,issueRequestJson,
    {
        auth:{
            username:username,
            password :apiKey 
        },
        headers:{
            'Content-Type':`application/json`
        }
    }

)

}

//Send the POST request

