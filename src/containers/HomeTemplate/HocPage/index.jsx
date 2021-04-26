import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WithModal from "./WithModal";

let ModalComponent = WithModal(NhanVien);

class HocPage extends Component {
  render() {
    return (
      <div>
        <h1>Hoc Page</h1>
        <ModalComponent />
      </div>
    );
  }
}

export default HocPage;
