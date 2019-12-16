import React from 'react';
import Button from '../button';

const ClientList = () => {
    const redirectToCreateClient = () => {
       window.location.href = '/client-add';
    }
    return (
        <div>
            <Button redirectFunction={redirectToCreateClient} text="Add Client" />
            <h2>Client List</h2>
           <table class="table table-hover" id="dev-table">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Package</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Kilgore</td>
                    <td>Kilgore@gmail.com</td>
                    <td>+923453458634</td>
                    <td>kilgore</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Bob</td>
                    <td>Bob@gmail.com</td>
                    <td>03232323232</td>
                    <td>boblahblah</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Holden</td>
                    <td>Holden@yahoo.com</td>
                    <td>03131313131</td>
                    <td>penceyreject</td>
                </tr>
                </tbody>
            </table> 
        </div>
      
    );
};
 
export default ClientList;