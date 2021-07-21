import { RoomService } from '../../service/room.service';
import { Room } from '../../room';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room | any = new Room();
  submitted = false;

  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit() {
  }

  testeValid(){
    console.log(this.room)
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new Room();
  }

  save() {
    this.roomService.createRoom(this.room)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();

  }

  onSubmit() {
    this.submitted = true;
  }

  gotoList() {
    this.room = new Room();
    this.router.navigate(['/rooms']);
  }

  gotoCreate() {
    this.room = new Room();
    this.submitted = false;
  }

  deleteRoom(id: number) {
    console.log(id)
    this.roomService.deleteRoom(id)
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error: any) => console.log(error));
  }
}
