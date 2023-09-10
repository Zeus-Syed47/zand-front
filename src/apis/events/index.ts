import axiosInstance from '../index';

/**
 * fetches all events
 * @returns 
 */
export const getEvents = async () => {
    try{
   const events = await axiosInstance.get('/events');
   console.log(events.data)
   return events.data ?? []
    }
    catch(err){
        console.log('getEvents err', err)
    }
}

/**
 * book an event
 * @param body 
 * @returns 
 */
export const bookEventApi = async (body) => {
    try{
   const events = await axiosInstance.post('/events', body);
   return true
    }
    catch(err){
        console.log('book event err', err);
        return true;
    }
}
