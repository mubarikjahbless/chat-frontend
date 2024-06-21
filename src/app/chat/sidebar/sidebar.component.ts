import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RoomsService } from '../../services/rooms.service';
import { ChatModelService } from '../../services/chat/chat-manager-service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  public users:any =  []
  public rooms:any = []

  constructor(
    private readonly authService:AuthService, 
    private readonly roomService: RoomsService,
    private readonly chatModelService: ChatModelService,
   private readonly socket: Socket) {
    this.getAllRooms();
    this.getAllUsers();

    
   }
  ngOnInit(): void {
    this.socket.on('user-connected', (users:any)=>{
      const uniqueUsers = new Set(users.map((item:any) => item.id));

    this.users = this.users.map((item:any) => {      
        return {
            ...item,
            online: uniqueUsers.has(item._id)
        };
    });
    })

    
  }

  private getAllUsers(){
    this.authService.getUsers().subscribe((users)=>{
     this.users = users     
    })
   }

   private getAllRooms(){
    this.roomService.find().subscribe(rooms => {this.rooms = rooms
    });
   }

   onChatSelected(selectedChat:any){      
    const selectedChatName = this.authService.currentUser.id===selectedChat._id? 'self': selectedChat.name
  this.chatModelService.getModel().selectedChat = {name:selectedChatName,id:selectedChat._id, type:'private'}
   }

   onSelectedChannel(selectedChat:any){      
    this.socket.emit('enter-chat-channel', {name:selectedChat.name, channelId:selectedChat._id })  
  this.chatModelService.getModel().selectedChat = {name:selectedChat.name,id:selectedChat._id, type:'channel'}
   }

}
