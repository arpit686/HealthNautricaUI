import { Component,OnInit } from "@angular/core";

import { IContactType,IRelationship,IInsuranceCoName, } from "../surgery-interface";

import { SurgeryService } from '../surgery.service'
import {FormGroup , FormControl ,FormBuilder, Validators} from '@angular/forms'

@Component({
    selector:"patient-info",
    templateUrl:"./parent-info1.html",
    providers:[SurgeryService]
})

export class PatientInfoComponent implements OnInit
{
    
userForm : FormGroup;

    primaryPhoneType1="";
    AlternatePhone="";
    CellPhone="";
    InsName="";
    patientRelationship="";
    SurRelationship="";
    SInsName="";


    contactTypes:IContactType[];
    patientType:IRelationship[];
    insuranceType:IInsuranceCoName[];
    constructor(private _surgeryService:SurgeryService,public _patientBuilder:FormBuilder){}

    ngOnInit()
    {
      this.contactTypes= this._surgeryService.getContactTypes();
      this.patientType=this._surgeryService.getpatienttype();
      this.insuranceType=this._surgeryService.getInsuranceCoName();
    
      this.userForm=this._patientBuilder.group({
             primaryphone:[],
             lastname:[],
             firstname:[],
             mi:[],
             dob:[],
             ssn:[],
             gender:[],
             primaryPhoneType1:[],
             pager:[],
             email:[],
             besttimetocall:[],
             alternatephone1:[],
             alternatephone:[],
             cellphone:[],
             cellphone1:[],
             patientRelationship:[],
             address1:[],
             address2:[],
             city:[],
             state:[],
             zip:[],
             lastname1:[],
             firstname1:[],
             subscribermi:[],
             auth:[],
             phone:[],
             insgrp:[],
             insid:[],
             pinszip:[],
             pinstate:[],
             pincity:[],
             pinaddress2:[],
             pinaddress1:[],
             reffreal:[],
             SurRelationship:[],
             lasttname2:[],
             firsttname2:[],
             middlename:[],
             autodateofenquiry:[],
             attorneyphone:[],
             autozip:[],
             autistate:[],
             autocity:[],
             autoaddress2:[],
             autoaddress1:[],
             attorneymiddleinit:[],
             attorneyfirstname:[],
             attorneylastname:[],
             
             dateofjourney:[],
             adjusterphonenumber:[],
             wczip:[],
             wcstate:[],
             wccity:[],
             wcaddress2:[],
             wcaddress1:[],
             adjustermiddlename:[],
             adjusterfirstname:[],
             adjusterlastname:[],
             casenumber:[],
             insauth:[],
             insphone:[],
             insgroup:[],
             insid1:[],
             inszip:[],
             inscity:[],
             insstate:[],
             insaddress2:[],
             insaddress1:[],
             insreffreal:[],
             insname:[],
             SInsName:[],
             middlename2:[],
             isauto:[],
             InsName:[],
      })

    }


    // secondaryPhoneType:string="c";
    // cells:any[]=[
    //     {name:'cell',value:"c"},
    //     {name:'home',value:"h"},
    // ];

}
