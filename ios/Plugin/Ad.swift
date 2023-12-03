import Foundation

@objc public class Ad: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
