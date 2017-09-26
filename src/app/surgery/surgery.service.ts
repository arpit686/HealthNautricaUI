import { Injectable } from '@angular/core';
import { IContactType,IRelationship,IInsuranceCoName,IPhysicianName,IOfficeCenter,ISurgeonName,IAnnesthesiaTypes,IBloodTypes,ILattexAllergy,IAlternativeAntibiotic,IPatientType ,IIsoltionPrecaution} from './surgery-interface';


@Injectable()

export class SurgeryService
{
    getContactTypes() : IContactType[]{
        return[
          {name:"Home",value:"H"},
          {name:"Cell",value:"C"},
          {name:"Work",value:"W"}
        ]
    }

    getRelationsheep():IRelationship[]{
        return[
            {name:"Self",value:"01"},
            {name:"Spouse",value:"02"},
            {name:"Child",value:"03"},
            {name:"Step Child",value:"04"},
            {name:"Parent",value:"05"},
            {name:"Other",value:"06"},
        ]
    }

    getInsuranceCoName():IInsuranceCoName[]
    {
        return[
            {name:"AARP",value:"AARP"},
            {name:"AETNA",value:"AETNA"},
            {name:"ANTHEM DIRECT",value:"ANTHEM DIRECT"},
            {name:"BLUE CROSS BLUE SHIELD - IL",value:"BLUE CROSS BLUE SHIELD - IL"},
            {name:"CIGNA",value:"CIGNA"},
            {name:"CORESOURCE - MD, PA, IL",value:"CORESOURCE - MD, PA, IL"},
            {name:"OTHER",value:"OTHER"},
        ]
        
    }

    getPhysician():IPhysicianName[]
    {
        return[
            {name:"Surgeon",value:"1"},
            {name:"Attending",value:"2"},
        ]
    }

    getOfficeName():IOfficeCenter[]
    {
        return[
            {name:"SURGICAL CONSULTANTS" , value:"1"},
            {name:"ALPINE PHY" , value:"2"},
            {name:"CRYSTAL" , value:"3"},
            {name:"REGENCY MEDICAL CENTER" , value:"4"},
            {name:"WOODSTOCK HEART CENTER" , value:"5"},
            {name:"WESTLAKE CLINIC" , value:"6"},
            {name:"CONDELL CLINIC" , value:"7"},
        ]
    }

    getsurgeonname():ISurgeonName[]
    {
        return[
            {name:"Dr. BRATIS, CHRISTINA",value:"10"},
            {name:"Dr. DILLON, BRUCE",value:"5"},
            {name:"Dr. GOKHALE, RAHUL",value:"47"},
            {name:"Dr. JEJURIKAR, SANDEEP",value:"8"},
            {name:"Dr. KADAKIA, SUNIL N",value:"2"},
            {name:"Dr. KARAHALIOUS, DEAN",value:"4"},
            {name:"Dr. LOUIS, STEVEN",value:"1"},
            {name:"Dr. ROSEN, JEFFREY",value:"3"},
            {name:"Dr. THANGAMANI, VIJAY",value:"9"}

        ]
    }

    getannesthesiatypes():IAnnesthesiaTypes[]
    {
        return[
            {name:"General" , value:"ANST_General" , isSelected:false},
            {name:"MAC" , value:"ANST_MAC" , isSelected:false},
            {name:"Local " , value:"ANST_Local" , isSelected:false},
            {name:"Regional Block " , value:"ANST_ReginalBlock" , isSelected:false},

        ]
    }

    getbloodTypes():IBloodTypes[]
    {
        return[
        {name:"Type/Screen PRBC",value:"BD_Cross", isSelected:false},
        {name:"Units" , value:"BD_Cross_Note" ,isSelected:false},
        {name:"Autologous" , value:"BD_Autologous" ,isSelected:false},
        {name:"Units" , value:"BD_Autologous_Note" ,isSelected:false},
        {name:"Designated Donor " , value:"BD_Donor" ,isSelected:false},
        {name:"Units" , value:"BD_Donor_Note" ,isSelected:false}
        ]
    }

    getlattexallergy():ILattexAllergy[]
    {
        return[
            {name:" Select" ,value:"X"},
            {name:"Yes" ,value:""},
            {name:"No" ,value:"N"},
            {name:"Unknown" ,value:"U"},
        ]
    }

    getalternativeantibiotic():IAlternativeAntibiotic[]
    {
        return[
            {name:"Cefazolin 1 gm IV" , value:"M"},
            {name:"Cefazolin 1 gm IV (physician aware of PCN allergy)" , value:"K"},
            {name:"Cefazolin 2 gm IV " , value:"N"},
            {name:"Cefazolin 2 gm IV (physician aware of PCN allergy)" , value:"I"},
            {name:"Cefoxitin 1 gm IV " , value:"O"},
            {name:"Cefoxitin 1 gm IV (physician aware of PCN allergy)" , value:"L"}
        ]
    }

    getpatienttype():IPatientType[]
    {
        return[
            {name:"OP" , value:"1"},
            {name:"Ambulatory" , value:"2"},
            {name:"AM Admit" , value:"3"},
            {name:"4" , value:"InHouse"},
        ]
    }

    getisolationprecaution():IIsoltionPrecaution[]{
        return[
            {name:"MRSA" ,value:"1"},
            {name:"vre" ,value:"2"},
            {name:"C-Diff" ,value:"3"},
            {name:"Other Isolation" ,value:"4"},
            {name:"Neutropenic" ,value:"5"},
            {name:"Positive Pressure" ,value:"6"},
        ]
    }

    
}
