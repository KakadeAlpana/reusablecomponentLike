import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeLikeComponent } from './youtube-like.component';

describe('YoutubeLikeComponent', () => {
  let component: YoutubeLikeComponent;
  let fixture: ComponentFixture<YoutubeLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeLikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
