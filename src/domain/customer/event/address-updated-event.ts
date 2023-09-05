import EventInterface from "../../@shared/event/event.interface";
import Address from "../value-object/address";

export default class AddressUpdatedEvent implements EventInterface {
    dataTimeOccurred: Date;
    eventData: {
        id: string; // Add the 'id' property
        name: string;
        address: Address;
    };

    constructor(eventData: {
        id: string;
        name: string;
        address: Address;
    }) {
        this.dataTimeOccurred = new Date();
        this.eventData = eventData;
    }
}
