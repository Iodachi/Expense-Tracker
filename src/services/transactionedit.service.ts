import { Injectable } from '@angular/core';

@Injectable()
export class TransactionEditService {
      setType(type){
        if(type == "income")  return true;
        else  return false;
      }
    
      setIconName(category, type){
        if(!type){
          if(category == "Food & Drinks")   return "restaurant";
          else if(category == "Rents & Bills")   return "flash";
          else if(category == "Shopping & Groceries")   return "cart";
          else if(category == "Transport")  return "bus";
          else if(category == "Entertainment")   return "game-controller-b";
          else if(category == "Healthcare")   return "heart";
          else if(category == "Others")   return "pricetag";
          else return "help";
        }else{
          if(category == "Salary")   return "briefcase";
          else if(category == "Interests")   return "card";
          else if(category == "Others")   return "apps";
          else return "help";
        }
      }
}