import mongoose, { Document, Schema } from 'mongoose';

interface ITacoBell extends Document {
  storeCode: number;
  storeName: string;
  period: number;
  week: number;
  code: string;
  date: Date;
  day: string;
  dayNo: number;
  storeSales: number;
  uberEats: number;
  grubhub: number;
  doordash: number;
  totalSales: number;
  budgetedSales: number;
  customerCount: number;
  averageTicketSizePY: number;
  labourHours: number;
  otHr: number;
  totalHour: number;
  otdOYPay: number;
  schadualHr: number;
  actualFoodCost: number;
  actualFoodCostPercent: number;
  employeeProductivity: number;
  mclanePurchase: number;
  mclanePercent: number;
  drinksPerTran: number;
  cashOverShort: number;
  labourCost: number;
  laborPercent: number;
  icosVarPercent: number;
  laborVarH: number;
  deletionsAfter: number;
  drinksOrder: number;
  deliverySales: number;
  kioskSales: number;
  mobileSales: number;
  employeeMeal: number ;
}

const TacoBellSchema: Schema<ITacoBell> = new Schema(
  {
    storeCode: { type: Number, unique: false, required: false },
    storeName: { type: String, required: false },
    period: { type:  Number, required: false },
    week: { type: Number, required: false },
    code: { type: String, required: false },
    date: { type:Date, required: false },
    day: { type: String, required: false },
    dayNo: { type: Number, required: false },
    storeSales: { type: Number, required: false },
    uberEats: { type: Number, required: false },
    grubhub: { type: Number, required: false },
    doordash: { type: Number, required: false },
    totalSales: { type: Number, required: false },
    budgetedSales: { type: Number, required: false },
    customerCount: { type: Number, required: false },
    averageTicketSizePY: { type: Number, required: false },
    labourHours: { type: Number, required: false },
    otHr: { type: Number, required: false },
    totalHour: { type: Number, required: false },
    otdOYPay: { type: Number, required: false },
    schadualHr: { type: Number, required: false },
    actualFoodCost: { type: Number, required: false },
    actualFoodCostPercent: { type: Number, required: false },
    employeeProductivity: { type: Number, required: false },
    mclanePurchase: { type: Number, required: false },
    mclanePercent: { type: Number, required: false },
    drinksPerTran: { type: Number, required: false },
    cashOverShort: { type: Number, required: false },
    labourCost: { type: Number, required: false },
    laborPercent: { type: Number, required: false },
    icosVarPercent: { type: Number, required: false },
    laborVarH: { type: Number, required: false },
    deletionsAfter: { type: Number, required: false },
    drinksOrder: { type: Number, required: false },
    deliverySales: { type: Number, required: false },
    kioskSales: { type: Number, required: false },
    mobileSales: { type: Number, required: false },
    employeeMeal: { type: Number, default: null },
  },
  { timestamps: true, strict: false }
);

export default mongoose.models.TacoBell as mongoose.Model<ITacoBell> || mongoose.model<ITacoBell>('tacobell', TacoBellSchema);
