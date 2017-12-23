export default function  getBaseUrl(){
    const inDevelopment = window.location.hostname == 'localhost';
    // if dev, then go to the local service endpoint for mock data, else go to the service endpoint for prod (defined in the routes)
    return inDevelopment? 'http://localhost:3001/' :'/';
}
