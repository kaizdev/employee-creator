package io.nology.employeecreator.employee;

import io.nology.employeecreator.employee.EmployeeEnum.EmploymentHours;
import io.nology.employeecreator.employee.EmployeeEnum.EmploymentType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.Date;

public class CreateEmployeeDTO {

  @NotBlank
  String firstName;

  @NotBlank
  String lastName;

  @NotBlank
  String email;

  @NotBlank
  String mobile;

  @NotBlank
  String address;

  @NotNull
  EmploymentType employmentType;

  @NotNull
  EmploymentHours employmentHours;

  @NotNull
  Date startDate;

  Date finishDate;

  public String getFirstName() {
    return this.firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return this.lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getMobile() {
    return this.mobile;
  }

  public void setMobile(String mobile) {
    this.mobile = mobile;
  }

  public String getAddress() {
    return this.address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public EmploymentType getEmploymentType() {
    return this.employmentType;
  }

  public void setEmploymentType(EmploymentType employmentType) {
    this.employmentType = employmentType;
  }

  public EmploymentHours getEmploymentHours() {
    return this.employmentHours;
  }

  public void setEmploymentHours(EmploymentHours employmentHours) {
    this.employmentHours = employmentHours;
  }

  public Date getStartDate() {
    return this.startDate;
  }

  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  public Date getFinishDate() {
    return this.finishDate;
  }

  public void setFinishDate(Date finishDate) {
    this.finishDate = finishDate;
  }

  public CreateEmployeeDTO(
    String firstName,
    String lastName,
    String email,
    String mobile,
    String address,
    EmploymentType employmentType,
    EmploymentHours employmentHours,
    Date startDate,
    Date finishDate
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobile = mobile;
    this.address = address;
    this.employmentType = employmentType;
    this.employmentHours = employmentHours;
    this.startDate = startDate;
    this.finishDate = finishDate;
  }
}
