package io.nology.employeecreator.employee;

import io.nology.employeecreator.employee.EmployeeEnum.EmploymentHours;
import io.nology.employeecreator.employee.EmployeeEnum.EmploymentType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;

@Entity
@Table(name = "employees")
public class Employee {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String firstName;

  @Column
  private String lastName;

  @Column
  private String email;

  @Column
  private String mobile;

  @Column
  private String address;

  @Column
  @Enumerated(EnumType.STRING)
  private EmploymentType employmentType;

  @Column
  @Enumerated(EnumType.STRING)
  private EmploymentHours employmentHours;

  @Column
  @Temporal(TemporalType.DATE)
  private Date startDate;

  @Column
  @Temporal(TemporalType.DATE)
  private Date finishDate;

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

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

  public Employee() {}

  public Employee(
    Long id,
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
    this.id = id;
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
