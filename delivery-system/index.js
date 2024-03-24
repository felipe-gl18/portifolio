import "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js";
import { Factory } from "./factory/factory.js";
const factory = new Factory();

await factory.ordersList();
await factory.deliverymansList();
await factory.addingDeliveryMansOptions();

factory.init();
