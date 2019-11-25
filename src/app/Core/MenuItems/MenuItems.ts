import { Injectable } from '@angular/core';

export interface MenuItems {
  state?: string;
  name: string;
  type: string;
  icon: string;
  class:string;
  children?: MenuItems[];
  isOpen ?: boolean;
  isFirst ?: boolean;
}


const MENUITEMS = [
   {
      // name : 'General',
      type : 'sub',
      class: 'group-title',
      icon : '',
      isOpen:true,
      isFirst : true,
      children : [
         {
            state: 'dashboard',
            name: 'Players',
            type: 'subChild',
            class: 'nav-item',
            icon: 'person',
            isOpen:true,
            children: [
               {state: 'Player Search', name: 'Player Search', type:'link', class:'list-item child-item'},
               {state: 'Add a new player', name: 'Add a new player', type:'link', class:'list-item child-item'},
               {state: 'Player Shelf Inquiries', name: 'Player Shelf Inquiries', type:'link', class:'list-item child-item'}
               
            ]
         },
         {
            state: 'widgets',
            name: 'Audition system',
            type: 'subChild',
            class: 'nav-item',
            icon: 'settings_system_daydream',
            children: [
               {state: 'user', name: 'Auditions in the system', type:'link',class:'list-item child-item'},
               {state: 'charts', name: 'Add a new audition', type:'link',class:'list-item child-item'},
               {state: 'user', name: 'Shelf inquiries from the cast', type:'link',class:'list-item child-item'}
            ]
         },
         {
            state: 'ecommerce',
            name: 'Messaging system',
            type: 'subChild',
            class: 'nav-item',
            icon: 'message',
            children: [
               {state: 'shop', name: 'Message list', type:'link',class:'list-item child-item'}
            ]
         },
         {
            state: 'pages',
            name: 'Last castings',
            type: 'subChild',
            class: 'nav-item',
            icon: 'cast',
            children: [
               {state: 'blog', name:'list', type:'link', class:'list-item child-item'},
               {state: 'gallery', name: 'Add', type:'link', class:'list-item child-item'}
               // {state: 'pricing-1', name: 'Pricing 1', type:'link', class:'list-item child-item'},
               // {state: 'pricing-2', name: 'Pricing 2', type:'link', class:'list-item child-item'},
               // {state: 'blank', name: 'Blank', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'session',
            name: 'Questions and Answers',
            type: 'subChild',
            class: 'nav-item',
            icon: 'question_answer',
            children: [
               {state: 'sign-up', name: 'list', type:'link', class:'list-item child-item'},
               {state: 'login', name: 'Add', type:'link', class:'list-item child-item'}
               // {state: 'lock-screen', name: 'Lock Screen', type:'link', class:'list-item child-item'},
               // {state: 'forgot-password', name: 'Forgot Password', type:'link', class:'list-item child-item'},
               // {state: 'reset-password', name: 'Reset Password', type:'link', class:'list-item child-item'}
            ]
         }
      ]
   },
   {
      // // name : 'Modules',
      // type : 'sub',
      // class: 'group-title',
      // icon : '',
      // isOpen:true,
      // children : [
      //    {
      //       state: 'inbox',
      //       name: 'Texts',
      //       type: 'link',
      //       class: 'nav-item',
      //       icon: 'mail',
            
      //    },
      //    {
      //       state: 'chat',
      //       name: 'Chat',
      //       type: 'link',
      //       class: 'nav-item',
      //       icon: 'forum'
      //    },
      // ]
   },
   {
      // name : 'Components',
      type : 'sub',
      class: 'group-title',
      icon : '',
      isOpen:true,
      children : [
         {
            state: 'ui-elements',
            name: 'Texts',
            type: 'subChild',
            class: 'nav-item',
            icon: 'textsms',
            children: [
               {state: 'buttons', name: 'List', type:'link', class:'list-item child-item'},
               {state: 'cards', name: 'Add', type:'link', class:'list-item child-item'},
               // {state: 'checkbox', name: 'Checkbox', type:'link', class:'list-item child-item'},
               // {state: 'carousel', name: 'Carousel', type:'link', class:'list-item child-item'},
               // {state: 'chips', name: 'Chips', type:'link', class:'list-item child-item'},
               // {state: 'datepicker', name: 'Datepicker', type:'link', class:'list-item child-item'},
               // {state: 'dialog', name: 'Dialog', type:'link', class:'list-item child-item'},
               // {state: 'grid', name: 'Grid', type:'link', class:'list-item child-item'},
               // {state: 'input', name: 'Input', type:'link', class:'list-item child-item'},
               // {state: 'list', name: 'List', type:'link', class:'list-item child-item'},
               // {state: 'menu', name: 'Menu', type:'link', class:'list-item child-item'},
               // {state: 'progress', name: 'Progress', type:'link', class:'list-item child-item'},
               // {state: 'radio', name: 'Radio', type:'link', class:'list-item child-item'},
               // {state: 'select', name: 'Select', type:'link', class:'list-item child-item'},
               // {state: 'slider', name: 'Slider', type:'link', class:'list-item child-item'},
               // {state: 'snackbar', name: 'Snackbar', type:'link', class:'list-item child-item'},
               // {state: 'tabs', name: 'Tabs', type:'link', class:'list-item child-item'},
               // {state: 'toolbar', name: 'Toolbar', type:'link', class:'list-item child-item'},
               // {state: 'tooltip', name: 'Tooltip', type:'link', class:'list-item child-item'},
               // {state: 'timepicker', name: 'Timepicker', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'forms',
            name: 'news',
            type: 'subChild',
            class: 'nav-item',
            icon: 'description',
            children: [
               {state: 'form-validation', name: 'List', type:'link', class:'list-item child-item'},
               {state: 'form-wizard', name: 'Add', type:'link', class:'list-item child-item'},
               {state: 'form-elements', name: 'Form Elements', type:'link', class:'list-item child-item'}
               // {state: 'form-upload', name: 'Form Upload', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'charts',
            name: 'From bands',
            type: 'subChild',
            class: 'nav-item',
            icon: 'donut_large',
            children: [
               {state: 'ngx-charts', name: 'list', type:'link', class:'list-item child-item'},
               {state: 'ngx-echarts', name: 'Add from a new band', type:'link', class:'list-item child-item'}
               // {state: 'google-charts', name: 'Google Charts', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'icons',
            name: 'general',
            type: 'subChild',
            class: 'nav-item',
            icon: 'flag',
            children: [
               {state: 'material', name: 'Player - Physical Features', type:'link', class:'list-item child-item'},
               {state: 'glyphicons', name: 'Player - additional capabilities', type:'link', class:'list-item child-item'},
               {state: 'fontawesome', name: 'Player - Subscription types', type:'link', class:'list-item child-item'},
               {state: 'linea', name: 'Types of auditions', type:'link', class:'list-item child-item'},
               {state: 'simple-line-icons', name: 'Audition subtype', type:'link', class:'list-item child-item'}, 
               {state: 'simple-line-icons', name: 'Agencies', type:'link', class:'list-item child-item'}      
       
            ]
         },
         {
            state: 'tables',
            name: 'New',
            type: 'subChild',
            class: 'nav-item',
            icon: 'grid_on',
            children: [
               {state: 'standard', name: 'Send custom SMS', type:'link', class:'list-item child-item'},
               {state: 'slots', name: 'Alerts', type:'link', class:'list-item child-item'}
               // {state: 'selectablerows', name: 'Selectable', type:'link', class:'list-item child-item'},
               // {state: 'searchwithtext', name: 'Search Row', type:'link', class:'list-item child-item'},
               // {state: 'basic', name: 'Basic', type:'link', class:'list-item child-item'},
               // {state: 'fullscreen', name: 'Fullscreen', type:'link', class:'list-item child-item'},
               // {state: 'selection', name: 'Selection', type:'link', class:'list-item child-item'},
               // {state: 'pinning', name: 'Pinning', type:'link', class:'list-item child-item'},
               // {state: 'paging', name: 'Paging', type:'link', class:'list-item child-item'},
               // {state: 'editing', name: 'Editing', type:'link', class:'list-item child-item'}
            ]
         },
         // {
         //    state: 'maps',
         //    name: 'Maps',
         //    type: 'subChild',
         //    class: 'nav-item',
         //    icon: 'map',
         //    children: [
         //       {state: 'google-maps', name: 'Google Maps', type:'link', class:'list-item child-item'},
         //       {state: 'leaflet-maps', name: 'Leaflet Maps', type:'link', class:'list-item child-item'},
         //       {state: 'jvector-map', name: 'Jvector Map', type:'link', class:'list-item child-item'}
         //    ]
         // },
      ]
   },
   // {
   //    name : 'Applications',
   //    type : 'sub',
   //    icon : '',
   //    class: 'group-title',
   //    isOpen:true,
   //    children : [
   //       {
   //          state: 'users',
   //          name: 'Users',
   //          type: 'subChild',
   //          class: 'nav-item',
   //          icon: 'group',
   //          children: [
   //             {state: 'user-profile', name: 'User Profile', type:'link', class:'list-item child-item'},
   //             {state: 'users-list', name: 'Users List', type:'link', class:'list-item child-item'}
   //          ]
   //       },
   //       {
   //          state : 'calendar',
   //          name  : 'Calendar',
   //          type  : 'link',
   //          class: 'nav-item',
   //          icon: 'calendar_today'
   //       }
   //    ]
   // },
   // {
   //    name : 'Features',
   //    type : 'sub',
   //    class: 'group-title',
   //    icon : '',
   //    isOpen:true,
   //    children : [
   //       {
   //          state: 'editor',
   //          name: 'Editor',
   //          type: 'subChild',
   //          class: 'nav-item',
   //          icon: 'edit',
   //          children: [
   //             {state: 'quilleditor', name: 'Quill Editor', type:'link', class:'list-item child-item'},
   //             {state: 'ace-editor', name: 'Ace Editor', type:'link', class:'list-item child-item'},
   //             {state: 'summer-editor', name: 'Summer Editor', type:'link', class:'list-item child-item'},
   //             {state: 'ckeditor', name: 'Ckeditor', type:'link', class:'list-item child-item'}
   //          ]
   //       },
   //       {
   //          state: 'drag-drop',
   //          name: 'Drag And Drop',
   //          type: 'subChild',
   //          class: 'nav-item',
   //          icon: 'mouse',
   //          children: [
   //             {state: 'dragula', name: 'Dragula', type:'link', class:'list-item child-item'},
   //             {state: 'draggable', name: 'Draggable', type:'link', class:'list-item child-item'},
   //             {state: 'draggable_resizable', name: 'Draggable Resizable', type:'link', class:'list-item child-item'},
   //          ]
   //       },
   //       {
   //          state: 'image-cropper',
   //          name: 'Image Cropper',
   //          class: 'nav-item',
   //          type: 'link',
   //          icon: 'crop'
   //       },
   //       {
   //          state: 'video-player',
   //          name: 'Video Player',
   //          type: 'link',
   //          class: 'nav-item',
   //          icon: 'video_library'
   //       },
   //       {
   //          state: 'dropzone',
   //          name: 'Dropzone',
   //          type: 'link',
   //          class: 'nav-item',
   //          icon: 'file_copy'
   //       },
   //    ]
   // }
]

@Injectable()
export class MenuItems {
  getAll(){
    return MENUITEMS;
  }
}
