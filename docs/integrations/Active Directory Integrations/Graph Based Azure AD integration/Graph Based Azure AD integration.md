
# Graph Based Azure AD Integration 
Here we also support graph based azure AD integration. we are going to explain few simple steps   
## Requirements
#### 1. Visit https://learn.microsoft.com/en-us/graph/auth-v2-service?view=graph-rest-1.0#1-register-your-app  
![SC_Step1](/img/graphAD_step1.png)  
#### 2. Click on Register your app as shown above or visit https://portal.azure.com/  
![SC_Step2](/img/graphAD_step2.png)  
#### 3. Once you are logged in - you will see the following screen. Go to All resources and click on View  
![SC_Step3](/img/graphAD_step3.png)  
#### 4. You will be taken to the following Screen  
![SC_Step4](/img/graphAD_step4.png)  
#### 5. Under Manager Azure Directory click on View (as shown above) and you will arrive on the following screen, then click on App Registration and then New Registration as shown below  
![SC_Step5](/img/graphAD_step5.png)  
#### 6. Enter a unique application name and select supported account types, then click on the Register button at bottom of the screen. Information entered above needs to be shared with Veris
![SC_Step6](/img/graphAD_step6.png)  
#### 7. Once Registration is done, you will arrive at the below screen. Click on New Client Secret  
![SC_Step7](/img/graphAD_step7.png)  
#### 8. Please note in the above step:  
#### a. Do not select any expiry time for client secret and choose the “Never” option  
#### b. The Value and Secret ID of the New Client Secret will be visible only for the first time and will get masked later on.  
#### c. Please make note of the same and share with Veris both the Value and	Secret ID of the New Client Secret  
#### 9. Then go to API Permission and click on “Add a permission” as shown below:  
![SC_Step9](/img/graphAD_step9.png)  
#### 10.Under Select an API >> Microsoft API click on Microsoft Graph as shown below  
![SC_Step10](/img/graphAD_step10.png)  
#### 11. Then click on Application Permission as shown below  
![SC_Step11](/img/graphAD_step11.png)  
#### 12. Under Select Permission search for User  
![SC_Step12](/img/graphAD_step12.png)  
#### 13. When we search for it, we will see the options in the dropdown similar to those shown below, select User.Read.All and User.ReadBasic.All and click on Add Permissions  
![SC_Step13](/img/graphAD_step13.png)  
#### 14. Then go to Azure Portal Home, Click on Overview. Under Overview there is certain Basic Information that is masked. The same needs to be shared with Veris.  
![SC_Step14](/img/graphAD_step14.png)  
#### 15. Then go to API Permissions and click on Grant admin consent for "name of registered app"  
![SC_Step15](/img/graphAD_step15.png)  
#### 16. You will see the below change in Status Column, citing “Granted for "registered application name" as shown below  
![SC_Step16](/img/graphAD_step16.png)  
#### 17. Then go to Enterprise Applications >> All Applications. Then Select the Application registered in Step 6 from the list of registered apps.  
![SC_Step17](/img/graphAD_step17.png)  
#### 18. Once done, then go to User and Groups, and select pan-India India employees (you need to provide access to this to your employees who all needed to be synced in Veris MemberBook)  
![SC_Step18](/img/graphAD_step18.png)  
#### 19. Click on any of the users to understand what fields are available for mapping with Veris - as per us it is First name, Last Name, Job Title, Department, Employee ID and Email  
![SC_Step19](/img/graphAD_step19.png)  
#### 20. The attribute Account Enabled (as shown below) will act as a check if a member will be active or inactive (present in the organization or no longer present in the organization) and will lead to the removal of the member from Veris Memberbook if left unchecked.  
![SC_Step20](/img/graphAD_step20.png)  