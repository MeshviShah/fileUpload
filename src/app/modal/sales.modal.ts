import mongoose, { Document, Schema } from 'mongoose';

interface ISheet extends Document {
  Store_Code: number;
  Store_Name: string;
  Period: number;
  Week: string;
  Code: string;
  Date: string;
  Day: string;
  Day_No:number;
  Store_Sales:number;
  Uber_Eats:number;
  Grubhub: number;
  Doordash: number;
  Total_Sales: number;
  Budgeted_Sales: number;
  Customer_Count: number;
  Average_Ticket_Size_PY: number;
  Labour_Hours: number;
  OT_Hr:number;
  Total_Hour:number;
  OTD$_OY_Pay: number;
  Schadual_Hr:number;
  Actual_Food_Cost:number;
  Actual_Food_Cost_Percent:number;
  Employee_Productivity:number;
  Mclane_Purchase:number;
  Mclane_Percent:number;
  Drinks_Per_Tran: number;
  Cash_Over_Short: number;
  Labour_Cost: number;
  Labor_Percent: number;
  ICOS_Var_Percent: number;
  Labor_Var_h: number;
  Deletions_After: number;
  Drinks_Order:number;
  Delivery_Sales: number;
  Kiosk_Sales: number;
  Mobile_Sales: number;
  Employee_Meal: number | null;
}

const SheetSchema: Schema<ISheet> = new Schema(
  {
    Store_Code: { type: Number, unique: false, required: false },
    Store_Name: { type: String, required: false },
    Period: { type: Number, required: false },
    Week: { type: String, required: false },
    Code: { type: String, required: false },
    Date: { type: String, required: false },
    Day: { type: String, required: false },
    Day_No: { type: Number, required: false },
    Store_Sales: { type: Number, required: false },
    Uber_Eats: { type: Number, required: false },
    Grubhub: { type: Number, required: false },
    Doordash: { type: Number, required: false },
    Total_Sales: { type: Number, required: false },
    Budgeted_Sales: { type: Number, required: false },
    Customer_Count: { type: Number, required: false },
    Average_Ticket_Size_PY: { type: Number, required: false },
    Labour_Hours: { type: Number, required: false },
    OT_Hr: { type: Number, required: false },
    Total_Hour: { type: Number, required: false },
    OTD$_OY_Pay: { type: Number, required: false },
    Schadual_Hr: { type: Number, required: false },
    Actual_Food_Cost: { type: Number, required: false },
    Actual_Food_Cost_Percent: { type: Number, required: false },
    Employee_Productivity: { type: Number, required: false },
    Mclane_Purchase: { type: Number, required: false },
    Mclane_Percent: { type: Number, required: false },
    Drinks_Per_Tran: { type: Number, required: false },
    Cash_Over_Short: { type: Number, required: false },
    Labour_Cost: { type: Number, required: false },
    Labor_Percent: { type: Number, required: false },
    ICOS_Var_Percent: { type: Number, required: false },
    Labor_Var_h: { type: Number, required: false },
    Deletions_After: { type: Number, required: false },
    Drinks_Order: { type: Number, required: false },
    Delivery_Sales: { type: Number, required: false },
    Kiosk_Sales: { type: Number, required: false },
    Mobile_Sales: { type: Number, required: false },
    Employee_Meal: { type: Number, default: null },
  },
  { timestamps: true, strict: false }
);

export default mongoose.models.Sheet as mongoose.Model<ISheet> || mongoose.model<ISheet>('Sheet', SheetSchema);
