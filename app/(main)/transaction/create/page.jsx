import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import React from "react";
import AddTransactionForm from "../_components/transactionform";
import { getTransaction } from "@/actions/transaction";


const AddTransactionPage = async ({ searchParams }) => {
  const params = await searchParams; 
  const accounts = await getUserAccounts();

  const editId = params?.edit ?? null; 

  let initialData = null;
  if(editId){
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="max-w-3xl mx-auto px-5 flex flex-col items-center">
      <h1 className="text-5xl gradient-title mb-8 text-center">{editId ? "Edit" : "Add"} Transaction</h1>
      <AddTransactionForm 
      accounts={accounts} 
      categories={defaultCategories}
      editMode={!!editId}
      initialData={initialData}
      />
    </div>
  );
};

export default AddTransactionPage;



