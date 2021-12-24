import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTopics } from './related-topics.component';

describe('RelatedTopics', () => {
  let component: RelatedTopics;
  let fixture: ComponentFixture<RelatedTopics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedTopics ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedTopics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
