import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet} from '@angular/router';
import { Producto } from './models/producto';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [RouterOutlet,FormsModule, Footer, Navbar],
  selector: 'app-root',
  standalone:true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('proyFinalAlbz');
   productos: Producto[]=[
    {id:1,nombre:"CocaCola",precio:6500},
    {id:2,nombre:"Doritos",precio:5000},
    {id:3,nombre:"Takis",precio:4500},
    {id:4,nombre:"Sprite",precio:5500}
  ]
  onEliminado(id:number): void{
   this.productos= this.productos.filter(
     p => p.id !== id ) 
   }
}
