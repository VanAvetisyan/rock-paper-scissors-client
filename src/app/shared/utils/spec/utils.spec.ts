import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';

export function mockBackendInSpec(): any {
  const httpTestingController = TestBed.inject(HttpTestingController);

  return {
    whenPost(url: string): any {
      return {
        expectRequest(data: any): any {
          return {
            respondWith(response: any): void {
              const req = httpTestingController.expectOne(url);
              expect(req.request.method).toEqual('POST');
              expect(req.request.body).toEqual(data);
              req.flush(response);
              httpTestingController.verify();
            },
          };
        },
      };
    },
  };
}
