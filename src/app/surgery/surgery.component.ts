import { Component,OnInit } from "@angular/core";
import { IContactType,IRelationship,IInsuranceCoName,IPhysicianName,IOfficeCenter,ISurgeonName,IAnnesthesiaTypes,IBloodTypes,ILattexAllergy,IAlternativeAntibiotic,IPatientType,IIsoltionPrecaution } from "./surgery-interface";


import { SurgeryService } from './surgery.service'

@Component({
    selector:"surgery-create",
    templateUrl:"./surgery.html",
    providers:[SurgeryService]
})

export class SurgeryComponent implements OnInit
{
    contactTypes:IContactType[];
    relationsheeps:IRelationship[];
    insuranceCoNames:IInsuranceCoName[];
    physicianNames:IPhysicianName[];
    officeName:IOfficeCenter[];
    surgeonName:ISurgeonName[];
    anesthsiaTypes:IAnnesthesiaTypes[];
    bloodTypes:IBloodTypes[];
    lattexTytpe:ILattexAllergy[];
    alternativeAntibiotic:IAlternativeAntibiotic[];
    patientType:IPatientType[];
    isolationPrecaution:IIsoltionPrecaution[];

    constructor(private _surgeryService:SurgeryService) {

    }
    ngOnInit()
    {   
        this.contactTypes=this._surgeryService.getContactTypes();
        this.relationsheeps=this._surgeryService.getRelationsheep();
        this.insuranceCoNames=this._surgeryService.getInsuranceCoName();
        this.physicianNames=this._surgeryService.getPhysician();
        this.officeName=this._surgeryService.getOfficeName();
        this.surgeonName=this._surgeryService.getsurgeonname();
        this.anesthsiaTypes=this._surgeryService.getannesthesiatypes();   
        this.bloodTypes=this._surgeryService.getbloodTypes();
        this.lattexTytpe=this._surgeryService.getlattexallergy(); 
        this.alternativeAntibiotic=this._surgeryService.getalternativeantibiotic();
        this.patientType=this._surgeryService.getpatienttype();
        this.isolationPrecaution=this._surgeryService.getisolationprecaution();
    }
}

